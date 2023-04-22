import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ErrorIcon from "@mui/icons-material/Error";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Box, Typography } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import OtpInput from "otp-input-react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import firebaseApp from "../../firebase/clientApp";

export default function Auth() {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  auth.languageCode = "it";
  const googleProvider = new GoogleAuthProvider();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isMobilePage, setIsMobilePage] = useState(false);

  const [showPasword, setShowPasword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isMobileError, setIsMobileError] = useState(false);

  const handleToggleAuthMode = () => {
    if (isMobilePage) {
      setIsMobilePage(false);
      setIsLoginPage(true);
    } else {
      setIsLoginPage((prev) => !prev);
    }
  };

  //google authentication
  const handleUserGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  // Sign up a new user
  const createAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed up successfully
        router.push("/");
      })
      .catch((error) => {
        // Error occurred while signing up
        console.error("Error creating user: ", error);
      });
  };

  // Sign in an existing user
  const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in successfully
        router.push("/");
      })
      .catch((error) => {
        // Error occurred while signing in
        setIsError(true);
        console.error("Error signing in: ", error);
      });
  };

  const [localCaptcha, setLocalCaptcha] = useState(null);

  //captcha verification
  const onCaptchaVerify = async () => {
    const localVerifierCaptcha = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          console.log("success");
          setShowOTP(true);
          handleSendCode();
        },
        "expired-callback": () => {},
      },
      auth
    );
    setLocalCaptcha(localVerifierCaptcha);
  };

  //to send code to phone number
  const handleSendCode = () => {
    onCaptchaVerify();
    const formatPhoneNumber = "+" + phoneNumber;
    const appVerifier = localCaptcha;
    signInWithPhoneNumber(auth, formatPhoneNumber, appVerifier)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //authentication
  const handleUserAuthentication = () => {
    if (isLoginPage) {
      signIn(email, password);
    } else if (isMobilePage) {
      handleSendCode();
    } else {
      createAccount(email, password);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box id="recaptcha-container"></Box>
      <Box
        sx={{
          height: { xs: "100%", md: "auto" },
          width: { xs: "100%", md: "400px" },
          background: "#FFFFFF",
          padding: "2em",

          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: "3em",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "2rem",
                textAlign: "center",
                color: "#2d333a",
                fontWeight: "600",
              }}
            >
              {isLoginPage || isMobilePage
                ? "Welcome Back"
                : "Create your account"}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
            <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
              {showOTP ? "OTP" : isMobilePage ? "Mobile" : "Email"}
            </Typography>
            {showOTP ? (
              <>
                {/* <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                ></OtpInput> */}
              </>
            ) : isMobilePage ? (
              <>
                <PhoneInput
                  country={"in"}
                  value={phoneNumber}
                  preferredCountries={["in", "us", "gb"]}
                  onChange={(phone) => setPhoneNumber(phone)}
                  enableSearch
                  disableSearchIcon
                  containerStyle={{
                    padding: ".5em",
                    border: "1px solid #d7dbd8",
                    borderRadius: "7px",
                    width: "95%",
                  }}
                  inputStyle={{
                    border: "none",
                    fontSize: "1rem",
                    borderRadius: "7px",
                    color: "#2d333a",
                  }}
                  buttonStyle={{
                    border: "none",
                    background: "#fefefe",
                    borderRadius: "10px",
                  }}
                  searchStyle={{
                    width: "90%",
                  }}
                />
                {isMobileError && (
                  <Box
                    sx={{ display: "flex", gap: ".5em", alignItems: "center" }}
                  >
                    <ErrorIcon sx={{ fontSize: "1rem", color: "red" }} />
                    <Typography sx={{ color: "red", fontSize: ".8rem" }}>
                      Error sending one time password
                    </Typography>
                  </Box>
                )}
              </>
            ) : (
              <input
                type="text"
                placeholder="Email"
                style={{
                  padding: ".75em",
                  outline: "none",
                  border: "2px solid #d7dbd8",
                  color: "#2d333a",
                  borderRadius: "7px",
                  fontSize: "1rem",
                  width: "90%",
                }}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </Box>
          {!isMobilePage && (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}
            >
              <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
                Password
              </Typography>
              <Box sx={{ position: "relative" }}>
                <Box
                  sx={{
                    position: "absolute",
                    right: "35px",
                    top: "13px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setShowPasword((prev) => !prev);
                  }}
                >
                  {showPasword ? (
                    <VisibilityIcon
                      sx={{ fontSize: "1.25em", color: "#2d333a" }}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{ fontSize: "1.25em", color: "#2d333a" }}
                    />
                  )}
                </Box>
                <input
                  type={showPasword ? "text" : "password"}
                  placeholder="Password"
                  style={{
                    padding: ".75em",
                    outline: "none",
                    border: "2px solid #d7dbd8",
                    color: "#2d333a",
                    borderRadius: "7px",
                    fontSize: "1rem",
                    width: "90%",
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
              {isError && (
                <Box
                  sx={{ display: "flex", gap: ".5em", alignItems: "center" }}
                >
                  <ErrorIcon sx={{ fontSize: "1rem", color: "red" }} />
                  <Typography sx={{ color: "red", fontSize: ".8rem" }}>
                    Wrong email or password
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".75em",
          }}
        >
          <button
            onClick={handleUserAuthentication}
            style={{
              background: "#C31815",
              boxShadow: "0px 8px 22px rgba(74, 58, 255, 0.26)",
              borderRadius: "7px",
              color: "white",
              border: "none",
              padding: ".75em .5em",
              width: "100%",
              cursor: "pointer",
            }}
          >
            <Typography sx={{ fontWeight: 500 }}>
              {isMobilePage ? "Send OTP" : isLoginPage ? "Login" : "Signup"}
            </Typography>
          </button>
          <Typography
            sx={{ textAlign: "center", color: "#6F6C90", cursor: "pointer" }}
          >
            {isMobilePage
              ? "Resend the code"
              : isLoginPage && "Forgot your password?"}
          </Typography>
          <Typography sx={{ textAlign: "center", color: "#6F6C90" }}>
            or
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "1em",
              flexDirection: "column",
            }}
          >
            {/* Google */}
            {!isMobilePage && (
              <>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5em",
                    alignItems: "center",
                    background: "white",
                    borderRadius: "8px",
                    border: "2px solid #d7dbd8",
                    padding: ".5em",
                    cursor: "pointer",
                  }}
                  onClick={handleUserGoogleLogin} //google authentication
                >
                  <img src={"/googleIcon.png"} alt="google-icon" height={20} />
                  <Typography>Continue with Google</Typography>
                </Box>
                {/* Number */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "1.5em",
                    background: "white",
                    borderRadius: "8px",
                    border: "2px solid #d7dbd8",
                    padding: ".5em",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsMobilePage(true);
                    setIsLoginPage(false);
                  }} //mobile authentication
                >
                  <img src={"/phoneIcon.png"} alt="phone-icon" height={20} />
                  <Typography>Continue with Mobile</Typography>
                </Box>
              </>
            )}
            <Box
              sx={{ display: "flex", gap: ".5em", justifyContent: "center" }}
            >
              <Typography sx={{ fontSize: ".9rem" }}>
                {isMobilePage
                  ? "Prefer email / password?"
                  : isLoginPage
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </Typography>
              <Typography
                sx={{ fontSize: ".9rem", color: "#c31815", cursor: "pointer" }}
                onClick={handleToggleAuthMode}
              >
                {isLoginPage && !isMobilePage ? "Sign up" : "Log in"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
