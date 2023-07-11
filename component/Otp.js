import { Box, Button, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useRouter } from 'next/router';

function Otp({phone}) {

    const { enqueueSnackbar } = useSnackbar();
    const [otp,setOtp] = useState('');
    const [OtpError, setOtpError] = useState('');
    const [loading, setLoading] = useState(false);
    const [phoneError, setPhoneError] = useState('');
    const [otpsent, setOtpSent] = useState(false);
    const Router = useRouter();
   
    const validateOTPField = () => {
        console.log(' valid otp fileld function is called');
        let valid = true;
        if(otp === '' || otp.length < 6){
            console.log(' otp must be 6 digit');
            setOtpError('Please enter a valid otp');
            valid = false;
        }else {
            setOtpError('');
            handleVerifyOtp();
        }
        return valid;
    }
    const handleVerifyOtp = () => {
        console.log('handelVerify otp function is called')
        axios
            .post('https://api.test.kemnu.com/v2/authenticate',
            {
                "strategy":"phone",
                "payload": {
                    "phone": phone,
                    "countryCode": "91"
                },
                "otp": otp ,
                "deviceId": "87841212sfdsr53w4sdfds234dsssdf3erdftsdfrpqws",
                "platform": 1
             }
            )
            .then((response) => {
                console.log('login successfully')
                Router.push('/AllCommunities');
                enqueueSnackbar('Login sucessfully', {
                    variant: 'success',
                    preventDuplicate: true,
                });
                localStorage.setItem('test-token', data?.accessToken);
            })
            .catch((error) => {
                console.log('login unsuccessfully', error)
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
            .finally(() => {
                setLoading(false);
            });
    };
    console.log('otp',otp)
    return (
        <>
            <Stack justifyContent='center' height='100vh' px={{ xs: 1, md: 6 }}>
                <img src='/images/R25.svg' height='70px' width='195px'  style={{mt:4}} />
                <Typography fontWeight='bold' sx={{ mt: 5,fontSize:22, }}>
                    Verify OTP
                </Typography>
                <Typography sx={{ mt: 1,fontSize:14,color:'#747474' }}>
                    Please enter the OTP sent to your phone number
                </Typography>
                {/* <Stack justifyContent='center' alignItems='center'> */}
                    <OtpInput
                        value={otp}
                        // onChange={setOtp}
                        onChange={setOtp}
                            // () =>{
                            // console.log(event.target.value)
                    // setOtp(event.target.value)


                        // }}
                        numInputs={6}
                        renderSeparator={<span>&nbsp;&nbsp;&nbsp;</span>}
                        renderInput={(props) => <input {...props} />}
                        containerStyle={{height:'100px'}}
                        // inputStyle={{height:{xs:'45px',md:'50px'},width:{xs:'30px',md:'50px'},
                        inputStyle={{height:'55px',width:'55px',
                        background: '#F2F2F2',
                        border: 'none',
                        borderRadius: 5,
                        padding:10
                    }}
                    />
                    {/* </Stack> */}
                    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',fontSize:14,color:'#747474'}}>
                        <Typography>
                        Don’t got the OTP?
                        </Typography>
                        <Link href="#" underline="none" sx={{color:'blue',fontSize:16,mr:2}}> 
                        Resend OTP
                        </Link>
                    </Box>
                    <Button
                        variant='contained'
                        disableElevation
                        // onClick={otpsent ?handleVerifyOtp : handleLogin}
                        sx={{
                            bgcolor: '#4194E6',
                            mt: 3,
                            ":hover": {
                                bgcolor: '#4194E6'
                            },height:56,width:{xs:'auto',md:387}
                        }}
                        onClick={() => {
                            console.log('Button clicked')
                            validateOTPField();
                        }}
                    >
                      Verify OTP
                    </Button>
            </Stack>
        </>
    )
}
export default Otp
