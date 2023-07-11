import React from 'react'
import { Box, Button, Grid, Hidden, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import Link from 'next/link'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Router from "next/router";
import { useState } from 'react';


function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validateFilds = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailverify = emailRegex.test(email);
        console.log('email', email);
        console.log(' === ', emailverify);
        if (password.length < 6) {
            alert('Password must be at least six characters long');
            return;
        }
        else if (password === '') {
            setPasswordError('Please Enter a valid password');
            return false;
        } else {
            return true;
        }
    }

    const handleLogin = () => {
        if (validateFilds()) {
            Router.push('/home')
        }
    }

    return (

        <>
            {
                console.log('hello')
            }
            <Grid container width='100%' height='100vh' >
                <Grid item md={6} xs={0} sm={0} >
                    <Hidden smDown>
                        <Box sx={{
                            height: '100vh auto', width: '100%',
                        }}>
                            <img src='/images/login-bgimage.svg' width='100%' height='620px' />
                        </Box>
                    </Hidden>
                </Grid>
                <Grid item md={6} xs={12} width='100%'>
                    <Stack sx={{
                        mx: { md: 10, }, mt: { md: 12, xs: 1 }, p: { xs: 2 }
                    }}>
                        <Hidden smUp>
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                <img src='/images/Vector.svg' width='100px' height='80px' />
                            </Box>
                        </Hidden>
                        <Box >
                            <Typography sx={{ color: '#4B1C7C', fontSize: 20, fontWeight: 'bold' }}>
                                Login
                            </Typography>
                            <Typography sx={{ fontSize: 15, mt: 1 }}>
                                Sign in to your account
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 3 }} >
                            <Typography sx={{ fontSize: 15, color: '#818181', }}>
                                Email ID
                            </Typography>
                            <TextField
                                variant='outlined'
                                type='text'
                                value={email}
                                sx={{ mb: 2 }}
                                error={!!emailError}
                                helperText={emailError}
                                fullWidth
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            <Box sx={{ mt: 2 }} >
                                <Typography sx={{ fontSize: 15, color: '#818181', }}>
                                    Password
                                </Typography>
                                <TextField
                                    variant='outlined'
                                    type={showPassword ? 'text' : 'password'}
                                    error={!!passwordError}
                                    helperText={passwordError}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                            </IconButton>
                                        </InputAdornment>,
                                    }}
                                    sx={{ marginBottom: 2 }}
                                    fullWidth
                                />
                            </Box>
                            <Typography sx={{ fontSize: 15, color: '#818181', }} >
                                By creating an account or logging in, you agree to our Terms & Privacy Policy.
                            </Typography>
                        </Box>
                        <Stack sx={{ mt: 3 }} >
                            <Button variant='contained'
                                onClick={(e) => {
                                    handleLogin()
                                }}
                                sx={{
                                    padding: 2, font: 'Rubik', fontSize: { md: 12, xs: 10 },
                                    bgcolor: '#4D0068', textTransform: "camelcase"
                                }}
                            >Login
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
};
export default Login;