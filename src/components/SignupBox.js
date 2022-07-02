import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, Stack } from '@mui/material';
import styled from '@emotion/styled';
import facebook from '../assets/icons/fb.png';
import google from '../assets/icons/google.png';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const theme = createTheme();

const SignupBox = () => {
    const [remember, setRemember] = React.useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    const handleFacebookSignin = () => { };
    const handleGoogleSignin = () => { };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        padding: '.5rem 1rem',
                        borderRadius: '5px',
                        boxShadow: '0px 0px 10px 0px rgba(64,59,59,0.75)'
                    }}
                >
                    <Avatar sx={{
                        m: 1,
                        bgcolor: '#ffad4b',
                        boxShadow: '0px 0px 10px 0px rgba(64,59,59,0.55)',
                        color: 'black'
                    }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ color: 'black' }}>
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                        </Grid>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel style={{ color: 'gray' }}
                            control={<Checkbox
                                value="remember"
                                color="primary"
                                onClick={() => setRemember(!remember)}
                            />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{
                                backgroundColor: '#ffa939',
                                color: 'black'
                            }}
                            disabled={remember}
                        >
                            Sign Up
                        </Button>
                        <Grid container style={{ justifyContent: 'center' }}>
                            <Grid item>
                                <Link to="/login" style={{
                                    color: '#ffad4b',
                                    fontSize: '15px',
                                }}>
                                    {"Have an account?"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Stack spacing={2} sx={{ mt: 1, width: '100%' }}>
                        <span style={{
                            color: 'black',
                            textAlign: "center"
                        }}
                            id='alternative-divider'
                        >or</span>
                        <Item
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'space-between',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleFacebookSignin()}
                        >
                            <img
                                src={facebook}
                                alt="fb"
                                style={{
                                    height: '37px',
                                    width: '37px'
                                }}
                            />
                            Continue with Facebook
                        </Item>
                        <Item
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: 'space-between',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleGoogleSignin()}
                        >
                            <img
                                src={google}
                                alt="ggl"
                                style={{
                                    height: '37px',
                                    width: '37px'
                                }}
                            />
                            Continue with Google
                        </Item>
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default SignupBox;
