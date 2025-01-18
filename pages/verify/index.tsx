import Head from 'next/head'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'

import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'

import AnimatedSuccess from '@/components/Shared/AnimatedSuccess'
import FullPageSpinner from '@/components/Shared/FullPageSpinner'
import Navbar from '@/components/Shared/Navbar'
import { useFeatureToggle } from '@/contexts/FeatureToggle'
import { useEmailVerify } from '@/hooks/Email/useEmailVerify'
import Error404Page from '@/pages/404'
import Error500Page from '@/pages/500'

const Verify = () => {
  const { toggles } = useFeatureToggle()

  const searchParams = useSearchParams()
  const token = searchParams.get('code')
  const initialized = useRef(false)

  const router = useRouter()

  const { data, mutate: emailVerify, isLoading, isSuccess, isError } = useEmailVerify()

  const [openModal, setOpenModal] = useState(true)

  const handleConfirm = () => {
    if (!token || !toggles.dashboard) return
    emailVerify({ token })
    setOpenModal(false)
    initialized.current = true
  }

  const handleCancel = () => {
    setOpenModal(false)
    router.replace('/dashboard')
  }

  useEffect(() => {
    if (initialized.current || !toggles.dashboard) return
    // The modal will control whether we proceed
  }, [toggles.dashboard])

  if (!toggles.dashboard || !token) return <Error404Page noTitle />
  if (isError) return <Error500Page />

  return (
    <>
      <Head>
        <title>Verify | DeerHacks</title>
      </Head>

      {isLoading || !isSuccess ? (
        <FullPageSpinner />
      ) : (
        <Fade in timeout={1000}>
          <Container
            maxWidth={false}
            sx={{
              p: 0,
              backgroundImage:
                'radial-gradient(circle closest-corner at 25% 60%, rgba(238, 39, 39, 0.25), rgba(255, 255, 255, 0)), radial-gradient(circle farthest-side at 71% 16%, rgba(154, 39, 238, 0.15), rgba(255, 255, 255, 0) 35%), radial-gradient(circle closest-corner at 32% 38%, rgba(238, 164, 39, 0.1), rgba(255, 255, 255, 0) 76%), radial-gradient(circle farthest-side at 69% 81%, rgba(255, 0, 48, 0.1), rgba(255, 255, 255, 0) 76%), linear-gradient(#202124, #202124)',
            }}
          >
            <Container
              sx={{
                minHeight: '100vh',
                pt: '1rem',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Navbar />
              <Container
                maxWidth="xs"
                sx={{
                  background: 'hsl(0deg 0% 0% / 25%)',
                  flexDirection: 'column',
                  textAlign: 'center',
                  borderRadius: '1rem',
                  gap: '1.5rem',
                }}
              >
                {data.status === 'success' ? (
                  <>
                    <Typography variant="h2">Welcome to DeerHacks</Typography>
                    <AnimatedSuccess show />
                    <Typography>
                      {data.context === 'signup'
                        ? "Voila, email verification successful. Let's get started on your DeerHacks application!"
                        : 'Your RSVP has been received. We look forward to seeing you at DeerHacks!'}
                    </Typography>
                  </>
                ) : data.status === 'expired' ? (
                  <>
                    <Typography variant="h2">Expired Link</Typography>
                    <Image
                      src="/icons/neon.png"
                      alt="DeerHacks Logo"
                      width={125}
                      height={125}
                      priority
                    />
                    <Typography>
                      The link has expired.{' '}
                      {data.context === 'signup'
                        ? 'Resend a verification link from your account settings.'
                        : 'Please open a ticket in the DeerHacks server for assistance.'}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography variant="h2">Invalid Token</Typography>
                    <Image
                      src="/icons/neon.png"
                      alt="DeerHacks Logo"
                      width={125}
                      height={125}
                      priority
                    />
                    <Typography>The token is invalid / has already been redeemed.</Typography>
                  </>
                )}
                <Button variant="outlined" fullWidth onClick={() => router.replace('/dashboard')}>
                  Go to Dashboard
                </Button>
              </Container>
              <span />
            </Container>
          </Container>
        </Fade>
      )}

      <Dialog
        open={openModal}
        onClose={handleCancel}
        sx={{
          zIndex: 99999999,
        }}
      >
        {' '}
        <DialogTitle>Confirm Email Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            By clicking confirm, you will verify your email using the provided token. Do you wish to
            proceed?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirm} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Verify
