import theme from '@/utils/theme'
import { Avatar, Box, Button, CircularProgress, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/router';
import useMediaQuery from '@mui/material/useMediaQuery';
import Otp from '../../component/Otp';
import FirstPage from '../../component/FirstPage';

function Login2() {
    const theme = useTheme();
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLoginFields = () => {
        if (phone === '') {
            setPhoneError('Please enter phone number');
        } else if (phone.length < 10) {
            setPhoneError('Phone number must contain 10 digits');
        } else if (phone.length !== 10) {
            setPhoneError('Phone number is more than 10 digits')
        } else {
            setPhoneError('');
            handleLogin();
        }
    }
    return (
        <Grid container>
            <Grid item xs={12} md={6} px={{ xs: 1, md: 10 }}>
                {
                    isLoggedIn ? (<FirstPage setIsLoggedIn={setIsLoggedIn}
                        setPhone={setPhone}
                        phone={phone} />) : (<Otp phone={phone} />)
                }
            </Grid>
            <Grid item xs={12} md={6}>
                <Avatar
                    variant='square'
                    src='/images/lock.svg'
                    sx={{ width: '100%', height: '100vh' }}
                />
            </Grid>
        </Grid>
    )
}
export default Login2