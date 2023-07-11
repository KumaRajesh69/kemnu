import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useSnackbar } from 'notistack';
import React from 'react'
import { useState } from 'react';

function FirstPage({ phone, setPhone, setIsLoggedIn }) {

    const [phoneError, setPhoneError] = useState('');
    const { enqueueSnackbar } = useSnackbar();

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
    const handleLogin = () => {

        axios
            .post('https://api.test.kemnu.com/v2/authenticate',
                {
                    "strategy": "phone",
                    "payload": {
                        "phone": phone,
                        "countryCode": "91"
                    },
                    "platform": 1
                }
            )
            .then((response) => {
                console.log('response', response)
                enqueueSnackbar('successful', {
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    }
                })
                setIsLoggedIn(false)

            })
            .catch((error) => {
                const data = error?.response?.data;
                enqueueSnackbar(data?.message || 'Somthing went wrong', {
                    variant: 'error',
                    preventDuplicate: true,
                    anchorOrigin: {
                        horizontal: 'right',
                        vertical: 'bottom',
                    },
                });
            })
    };

    return (
        <>
            <Stack justifyContent='center' height='100vh' px={{ xs: 1, md: 7 }}>
                <img src='/images/R25.svg' height='70px' width='195px' style={{mt:4}}/>
                <Typography fontWeight='bold' sx={{ mt: 4,fontSize:22 }}>
                    Login
                    {/* {otpsent ? 'verify OTP' : 'Login'} */}
                </Typography>
                <Typography sx={{ mt: 1 ,fontSize:14,color:'#747474'}}>
                    Please enter   your phone number
                </Typography>
                <Typography sx={{ fontSize: 15, color: '#818181', }}>
                    {/* Please enter  {otpsent && 'the OTP sent to'} your phone number */}
                </Typography>
                {/* <Box sx={{height:100,}}> */}
                <TextField
                    variant='outlined'
                    // size='small'
                    error={phoneError}
                    helperText={phoneError}
                    type='number'
                    value={phone}
                    fullWidth
                    onChange={(e) => setPhone(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position='start'>+ 91</InputAdornment>
                        )
                    }}
                    sx={{ my: 3,height:'56px'}}
                />
                {/* </Box> */}
                
                <Button
                    variant='contained'
                    disableElevation
                    onClick={() => {
                        handleLoginFields();
                    }}
                    sx={{
                        bgcolor: '#4194E6',
                        mt: 3,
                        ":hover": {
                            bgcolor: '#4194E6'
                        },
                        height:56
                    }}
                >
                    Get OTP
                </Button>

            </Stack>
        </>
    )
}
export default FirstPage