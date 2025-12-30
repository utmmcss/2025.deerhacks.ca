import { SxProps, Theme } from '@mui/material/styles'
import { useState } from 'react'

import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Snackbar from '@mui/material/Snackbar'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'


const subscriptionBoxStyle: SxProps<Theme> = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(10px)',
    borderRadius: 4,
    p: { xs: 3, md: 6 },
    maxWidth: 'md',
    mx: 'auto',
    border: '1px solid rgba(255, 255, 255, 0.1)',
}

const EmailSubscription = () => {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setLoading(true)
        setError('')

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
            const response = await fetch(`${apiUrl}/api/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            if (!response.ok) {
                throw new Error('Subscription failed')
            }

            setSuccess(true)
            setEmail('')
        } catch (err) {
            setError('Something went wrong. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container id="subscription" sx={{ py: 8, textAlign: 'center' }}>
            <Box
                sx={subscriptionBoxStyle}
                data-aos="fade-up"
            >
                <Typography variant="h3" gutterBottom color="text.primary" sx={{ fontWeight: 'bold' }}>
                    Stay in the Loop
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Subscribe to our newsletter for the latest updates, announcements, and opportunities!
                </Typography>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TextField
                        variant="outlined"
                        placeholder="Enter your email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        fullWidth
                        sx={{
                            maxWidth: 400,
                            '& .MuiOutlinedInput-root': {
                                bgcolor: 'background.paper',
                                borderRadius: 2,
                            },
                        }}
                    />
                    <Button
                        variant="contained"
                        size="large"
                        type="submit"
                        disabled={loading}
                        sx={{
                            borderRadius: 2,
                            px: 4,
                            py: 1.8,
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: 'white',
                            fontWeight: 'bold',
                            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                            '&:hover': {
                                background: 'linear-gradient(45deg, #FE6B8B 60%, #FF8E53 90%)',
                            },
                        }}
                    >
                        {loading ? <CircularProgress size={24} color="inherit" /> : 'Subscribe'}
                    </Button>
                </Box>
            </Box>

            <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
                <Alert onClose={() => setSuccess(false)} severity="success" sx={{ width: '100%' }}>
                    Successfully subscribed! Check your inbox for a welcome email.
                </Alert>
            </Snackbar>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError('')}>
                <Alert onClose={() => setError('')} severity="error" sx={{ width: '100%' }}>
                    {error}
                </Alert>
            </Snackbar>
        </Container>
    )
}

export default EmailSubscription
