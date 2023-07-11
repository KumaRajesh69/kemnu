import {
    Box,
    Button,
    Grid,
    Hidden,
    InputAdornment,
    Stack,
    CircularProgress,
    TextField,
    Typography,
    Avatar,
  } from "@mui/material";
  import Link from "next/link";
  import OtpInput from "react-otp-input";
  import axios from "axios";
  import { useTheme } from "@mui/material/styles";
  import useMediaQuery from "@mui/material/useMediaQuery";
  import { useRouter } from "next/router";
  import { useSnackbar } from "notistack";
  import React, { useState } from "react";
  
  function Login() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
  
    const [loading, setLoading] = useState(false);
  
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
  
    const [otp, setOtp] = useState("");
    const [otpsent, setOtpSent] = useState(false);
  
    const handleLoginFeilds = () => {
      if (phone === "") {
        setPhoneError("Please enter phone number");
        return false;
      } else if (phone.length < 10) {
        setPhoneError("Phone number must contain 10 digits");
        return false;
      } else {
        setPhoneError("");
      }
      return true;
    };
  
    const handleLogin = () => {
      if (handleLoginFeilds()) {
        setLoading(true);
        axios
          .post("https://api.test.kemnu.com/v2/authenticate", {
            strategy: "phone",
            payload: {
              phone: phone,
              countryCode: "91",
            },
            platform: 1,
          })
          .then((response) => {
            enqueueSnackbar("OTP sent sucessfully", {
              variant: "success",
              preventDuplicate: true,
            });
            setOtpSent(true);
          })
          .catch((error) => {
            const data = error?.response?.data;
            enqueueSnackbar(data?.message || "Something went wrong", {
              variant: "error",
              preventDuplicate: true,
              anchorOrigin: {
                horizontal: "right",
                vertical: "bottom",
              },
            });
          })
          .finally(() => {
            setLoading(false);
          });
      }
    };
  
    const handleVerifyOTP = () => {
      axios
        .patch("https://api.test.kemnu.com/v2/authenticate", {
          strategy: "phone",
          payload: {
            phone: phone,
            countryCode: "91",
          },
          otp: otp,
          deviceId: "87841212sfdsr53w4sdfds234dsssdf3erdftsdfrpqws",
          platform: 1,
        })
        .then((response) => {
          const { data } = response;
          enqueueSnackbar("Login Sucessfull", {
            variant: "success",
            preventDuplicate: true,
          });
          localStorage.setItem("test-token", data?.accessToken);
          router.push("/");
        })
        .catch((error) => {
          const data = error?.response?.data;
          enqueueSnackbar(data?.message || "Something went wrong", {
            variant: "error",
            preventDuplicate: true,
            anchorOrigin: {
              horizontal: "right",
              vertical: "bottom",
            },
          });
        })
        .finally(() => {
          setLoading(false);
        });
    };
  
    return (
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Stack justifyContent="center" height={"100vh"} px={{ xs: 1, md: 10 }}>
            <img src="/images/Logo.svg" height={100} width={170} />
            <Typography variant="h6" fontWeight="bold">
              {otpsent ? "Verify OTP" : "Login"}
            </Typography>
            <Typography variant="caption" color="#747474" sx={{ mb: 3 }}>
              Please enter {otpsent && "the OTP sent to"} your phone number
            </Typography>
  
            {otpsent ? (
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span></span>}
                inputStyle={{
                  width: "15%",
                  height: 50,
                  marginRight: "2%",
                  background: "#F2F2F2",
                  border: "none",
                  borderRadius: 5,
                }}
                renderInput={(props) => <input {...props} />}
              />
            ) : (
              <TextField
                variant="outlined"
                size="small"
                type="number"
                value={phone}
                error={!!phoneError}
                helperText={phoneError}
                onChange={(e) => {
                  const _num = e.target.value;
                  if (_num.length <= 10) {
                    setPhone(_num);
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+ 91</InputAdornment>
                  ),
                }}
              />
            )}
  
            {otpsent && (
              <Stack spacing={1} direction="row" justifyContent="center" my={2}>
                <Typography variant="caption" color="#747474">
                  Don’t got the OTP?
                </Typography>
                <Typography
                  variant="caption"
                  color="#4194E6"
                  component={Link}
                  href={"/"}
                  sx={{
                    textDecoration: "none",
                    "&: hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Resend OTP
                </Typography>
              </Stack>
            )}
  
            <Button
              variant="contained"
              disableElevation
              onClick={otpsent ? handleVerifyOTP : handleLogin}
              sx={{
                mt: 3,
              }}
            >
              {loading ? (
                <CircularProgress size={18} />
              ) : otpsent ? (
                "Verify OTP"
              ) : (
                "Send OTP"
              )}
            </Button>
          </Stack>
        </Grid>
  
        <Hidden smDown>
          <Grid item xs={12} sm={6} sx={{ height: "100vh" }}>
            <Avatar
              variant="square"
              src="/images/login-image.png"
              sx={{ width: "100%", height: "100%" }}
            />
          </Grid>
        </Hidden>
      </Grid>
    );
  }
  
  export default Login;
  