import Image from 'next/image'
import { Suspense, useEffect, useState } from 'react'

import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { useToast } from '@/contexts/Toast'
import { Environment, OrbitControls, PerformanceMonitor, Preload, useGLTF } from '@react-three/drei'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer, Noise, ToneMapping } from '@react-three/postprocessing'
import { suspend } from 'suspend-react'
import { Mesh, MeshStandardMaterial, RepeatWrapping,TextureLoader } from 'three'
import { GLTF, GLTFLoader } from 'three-stdlib'

extend({ OrbitControls })

type Props = {
  onAfterRender?: () => void
}

type ModelProps = {
  onAfterRender?: () => void
  onError: () => void
}

const environment = import('@pmndrs/assets/hdri/city.exr').then((module) => module.default)
useGLTF.preload('./sun.glb')

const Model = (props: ModelProps) => {
  const { onAfterRender, onError } = props;
  const [model, setModel] = useState<GLTF | null>(null);
  
  // Create sun material with emissive properties
  const sunMaterial = new MeshStandardMaterial({
    color: 0xffdd00,
    emissive: 0xff8800,
    emissiveIntensity: 1,
    roughness: 0.7,
    metalness: 0,
  });

  // Add noise texture for surface detail
  useEffect(() => {
    const textureLoader = new TextureLoader();
    textureLoader.load('./noise-texture.jpg', (texture) => {
      texture.wrapS = texture.wrapT = RepeatWrapping;
      texture.repeat.set(2, 2);
      sunMaterial.displacementMap = texture;
      sunMaterial.displacementScale = 0.05;
    });
  }, []);

  // Load the base model
  useEffect(() => {
    const loadModel = async () => {
      try {
        const gltf = await new GLTFLoader().loadAsync('./sun.glb');
        setModel(gltf);
      } catch (error) {
        console.error('Error loading GLB model:', error);
        onError();
      }
    };

    loadModel();
  }, [onError]);

  // Animate the sun's surface
  useFrame((state) => {
    if (sunMaterial.displacementMap) {
      sunMaterial.displacementMap.offset.x += 0.001;
      sunMaterial.displacementMap.offset.y += 0.001;
    }
  });

  if (!model) return null;

  const { scenes } = model;
  if (scenes.length === 0) {
    console.error('The GLB file contains no scenes.');
    return null;
  }

  const scene = scenes[0];
  const [sunMesh] = scene.children.filter(
    (child): child is Mesh => child instanceof Mesh
  );

  if (!sunMesh) {
    console.error('Expected mesh components are missing in the model.');
    return null;
  }

  return (
    <group dispose={null} position={[0, 0, 0]}>
      {/* Main sun mesh */}
      <mesh
        geometry={sunMesh.geometry}
        material={sunMaterial}
        onAfterRender={() => onAfterRender?.()}
      >
        {/* Add point lights to create sun-like illumination */}
        <pointLight
          position={[0, 0, 0]}
          intensity={2}
          color={0xffdd00}
          distance={10}
          decay={2}
        />
        <pointLight
          position={[0, 0, 0]}
          intensity={1.5}
          color={0xff8800}
          distance={15}
          decay={2}
        />
        <pointLight
          position={[0, 0, 0]}
          intensity={1.2}
          color={0xffdd00}
          distance={20}
          decay={2}
        />
      </mesh>

      {/* Corona effect using a larger, semi-transparent sphere */}
      <mesh>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshBasicMaterial
          color={0xffaa00}
          transparent={true}
          opacity={0.1}
        />
      </mesh>
    </group>
  );
};

const MNModel = (props: Props) => {
  const { onAfterRender } = props

  const [dpr, setDpr] = useState(1.25)
  const [fallback, setFallback] = useState(false)
  const [hasHWA] = useState(() => {
    const test = (force: boolean) => {
      if (typeof OffscreenCanvas === 'undefined') return ''
      const canvas = new OffscreenCanvas(200, 200)
      const ctx = canvas.getContext('2d', { willReadFrequently: force })
      if (!ctx) return ''
      ctx.moveTo(0, 0), ctx.lineTo(120, 121)
      ctx.stroke()
      return ctx.getImageData(0, 0, 200, 200).data.join()
    }

    const isVendorApple = navigator.vendor && navigator.vendor.indexOf('Apple') > -1
    const isNotCriOS = navigator.userAgent && navigator.userAgent.indexOf('CriOS') === -1
    const isNotFxiOS = navigator.userAgent && navigator.userAgent.indexOf('FxiOS') === -1

    const isSafari = isVendorApple && isNotCriOS && isNotFxiOS
    const result = isSafari || test(true) !== test(false)

    return result
  })

  const { setToast } = useToast()

  return (
    <Container
      maxWidth={false}
      sx={{
        height: 'calc(100svh - 4rem)',
        p: '0 !important',
        m: { xs: '2rem 1rem', lg: '2rem' },
        width: { xs: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' },
        borderRadius: '1rem',
        backgroundImage: `
          linear-gradient(to bottom, 
            rgba(128, 0, 0, 1) 0%,  /* Maroon sky */
            rgba(255, 0, 0, 1) 60%, /* Red for transition */
            rgba(255, 127, 80, 0.5) 75%,  /* Orange for ground */
            rgba(255, 255, 0, 1) 100%     /* Yellow for ground */
          )`,
      }}
    >
      {hasHWA && !fallback ? (
        <Canvas
          camera={{
            position: [2.5, 0, -1.5],
            filmOffset: -0.5,
          }}
          style={{ cursor: 'move' }}
          dpr={dpr}
        >
          <PerformanceMonitor
            onIncline={() => setDpr(Math.min(dpr + 0.25, 1.5))}
            onDecline={() => setDpr(Math.max(dpr - 0.25, 0.75))}
          />
          <Suspense>
            <Model onAfterRender={() => onAfterRender?.()} onError={() => setFallback(true)} />
            <Environment files={suspend(environment) as string} />
            <Preload all />
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.5}
            rotateSpeed={1}
            maxPolarAngle={1.6}
            enablePan={false}
            enableZoom={false}
          />
          <EffectComposer disableNormalPass multisampling={4}>
            <Bloom mipmapBlur luminanceThreshold={1} />
            <Noise opacity={0.05} />
            <ToneMapping
              adaptive
              resolution={256}
              middleGrey={0.4}
              maxLuminance={20.0}
              averageLuminance={1.0}
              adaptationRate={1.0}
            />
          </EffectComposer>
        </Canvas>
      ) : (
        <Container data-aos="zoom-out" data-aos-duration="2000">
          <Image
            src="/icons/neon.png"
            alt="DeerHacks Glow"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'min(100%, 300px)', height: 'auto' }}
            priority
            onLoad={() => {
              onAfterRender?.()
              if (hasHWA) return
              setToast({
                type: 'info',
                message: (
                  <>
                    Interacting with the 3D model is disabled for either performance, browser
                    support, or hardware acceleration is disabled.{' '}
                    <Link
                      rel="noopener"
                      target="_blank"
                      underline="always"
                      href="https://google.com/search?q=Enable+Browser+Hardware+Acceleration"
                      sx={{ color: 'primary.main', opacity: 0.9 }}
                    >
                      Learn More
                    </Link>
                  </>
                ),
                autoHide: false,
              })
            }}
          />
        </Container>
      )}
      <Typography
        color="text.secondary"
        letterSpacing={1.5}
        textAlign="right"
        display={{ xs: 'none', md: 'grid', lg: 'block' }}
        position="absolute"
        p="0 2rem 2rem 0"
        sx={{ inset: 'auto 0 0 auto' }}
        data-aos="fade"
        data-aos-delay="2000"
        data-aos-duration="2000"
      >
        <span>43.5505053°,&nbsp;</span>
        <span>-79.6662651°</span>
      </Typography>
    </Container>
  )
}
export default MNModel