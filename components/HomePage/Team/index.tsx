import { Suspense, useState } from 'react'
import Marquee from 'react-fast-marquee'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import ModalOrganizer, { ModalOrganizerProps } from '@/components/HomePage/ModalOrganizer'

const Team = () => {
  const [open, setOpen] = useState(false)
  const [organizer, setOrganizer] = useState<ModalOrganizerProps>({
    name: '',
    description: '',
    avatar: '',
    emoji: '',
    website: '',
    linkedin: '',
    github: '',
  })

  const Organizer = (props: ModalOrganizerProps) => {
    const { name, avatar } = props

    return (
      <Tooltip title={name} placement="top" sx={{ m: { xs: 0, sm: '0.25rem', m: '0.5rem' } }}>
        <IconButton
          tabIndex={-1}
          onClick={() => {
            setOrganizer(props)
            setOpen(true)
          }}
        >
          <Avatar src={avatar} alt={name} sx={{ width: 65, height: 65, filter: 'saturate(0.9)' }} />
        </IconButton>
      </Tooltip>
    )
  }

  return (
    <>
      <Container
        data-aos="fade"
        data-aos-offset="100"
        data-aos-duration="1200"
        data-aos-once="false"
        sx={{
          gap: '1rem 2.5rem',
          textAlign: { xs: 'center', lg: 'left' },
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-between',
          pt: '3rem !important',
          pb: '0 !important',
        }}
      >
        <Box component="div" minWidth="fit-content">
          <Typography
            variant="h2"
            gutterBottom
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-offset="100"
            data-aos-once="false"
          >
            The Organizing Team
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="100"
            data-aos-once="false"
          >
            & special thanks to all staff ❤️
          </Typography>
        </Box>
        <Marquee
          play={!open}
          autoFill
          direction="right"
          speed={60}
          pauseOnHover
          style={{
            padding: '0.5rem 0',
            maskImage:
              'linear-gradient(to right,transparent,black,black,black,black,black,black,transparent)',
            WebkitMaskImage:
              'linear-gradient(to right,transparent,black,black,black,black,black,black,transparent)',
          }}
        >
          <Organizer
            name="Henrik S. Zimmermann"
            description="I like coding"
            avatar="/team/henrik.jpeg"
            emoji="😘"
            website=""
            linkedin="https://www.linkedin.com/in/henrikszimmermann/"
            github="https://github.com/HenrikSZ"
          />
          <Organizer
            name="Taleen Abraham"
            description="I like coding"
            avatar="/team/taleen.jpeg"
            emoji="💵"
            website=""
            linkedin="https://linkedin.com/in/ninaricci29"
          />
          <Organizer
            name="Abdullah Shahid"
            description="i like coding"
            avatar="/team/abdullah.webp"
            emoji="💤"
            website="https://nxabdullah.dev"
            linkedin="https://www.linkedin.com/in/nxabdullah/"
          />
          <Organizer
            name="Joshua Wuebbolt"
            description="i like coding"
            avatar="/team/joshua.jpeg"
            emoji="💤"
            website=""
            linkedin=""
          />
          <Organizer
            name="Krit Kasikpan"
            description="i like coding"
            avatar="/team/krit.jpeg"
            emoji="💤"
            website=""
            linkedin=""
          />
        </Marquee>
      </Container>
      <Suspense>
        <ModalOrganizer open={open} onClose={() => setOpen(false)} {...organizer} />
      </Suspense>
    </>
  )
}

export default Team
