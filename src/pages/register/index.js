import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import firebaseApp from "../../firebase/clientApp";
import HeaderTitle from "@/Components/Register/HeaderTitle";
import ErrorText from "@/Components/Register/ErrorText";
import SocialLogin from "@/Components/Register/SocialLogin";
import RegisterFooterText from "@/Components/Register/RegisterFooterText";
import Input from "@/Components/Register/Input";
import Button from "@/Components/Button/Button";
import MobilePage from "@/Components/Register/MobilePage";
import TogglePassword from "@/Components/Register/TogglePassword";

export default function Register() {
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationOTP, setVerificationOTP] = useState("");

  const [confirmationResult, setConfirmationResult] = useState(null);
  const [localVerifierCaptchaState, setLocalVerifierCaptchaState] =
    useState(null);

  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isMobilePage, setIsMobilePage] = useState(false);

  const [showOTP, setShowOTP] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [isError, setIsError] = useState(false);
  const [isMobileError, setIsMobileError] = useState(false);

  const handleToggleAuthMode = () => {
    if (isMobilePage) {
      setIsMobilePage(false);
      setShowOTP(false);
      setIsLoginPage(true);
    } else {
      setIsLoginPage((prev) => !prev);
    }
  };

  // Sign up a new user
  const createAccount = (email, password) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed up successfully
        router.push("/");
      })
      .catch((error) => {
        console.error("Error creating user: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Sign in an existing user
  const signIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in successfully
        router.push("/");
      })
      .catch((error) => {
        setIsError(true);
        console.error("Error signing in: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //captcha verification
  useEffect(() => {
    const localVerifierCaptcha = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: () => {
          handleSendCode();
        },
        "expired-callback": () => {},
      },
      auth
    );
    setLocalVerifierCaptchaState(localVerifierCaptcha);
  }, []);

  //to send code to phone number
  const handleSendCode = async () => {
    if (!phoneNumber) {
      return;
    }

    const localVerifierCaptcha = localVerifierCaptchaState;
    setIsLoading(true);

    const formatPhoneNumber = "+" + phoneNumber;

    await signInWithPhoneNumber(auth, formatPhoneNumber, localVerifierCaptcha)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);

        setShowOTP(true);
        setIsMobileError(false);
      })
      .catch((error) => {
        console.log(error);
        setIsMobileError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //verify otp
  const verifyOTP = () => {
    setIsLoading(true);
    confirmationResult
      .confirm(verificationOTP)
      .then(async () => {
        router.push("/");
      })
      .catch((error) => {
        console.log("error", error);
        setIsMobileError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //resend OTP
  const handleResendCode = () => {
    console.log("WIP");
    const localCaptchaVerifier = localVerifierCaptchaState;
    console.log(localCaptchaVerifier);

    localCaptchaVerifier
      .verify()
      .then(() => {
        return firebase
          .auth()
          .signInWithPhoneNumber(phoneNumber, localCaptchaVerifier);
      })
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
        console.log("New confirmation result:", confirmationResult);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //authentication
  const handleUserAuthentication = () => {
    if (showOTP) {
      verifyOTP();
      return;
    }
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
          <HeaderTitle
            title={
              isMobilePage
                ? "OTP Verification"
                : isLoginPage || isMobilePage
                ? "Welcome Back"
                : "Create your account"
            }
          />
          <Box sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}>
            <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
              {showOTP ? "OTP" : isMobilePage ? "Mobile" : "Email"}
            </Typography>
            {showOTP ? (
              <>
                <MuiOtpInput
                  length={6}
                  value={verificationOTP}
                  onChange={setVerificationOTP}
                />
                <ErrorText showError={isMobileError} errorText="Invalid OTP" />
              </>
            ) : isMobilePage ? (
              <>
                <MobilePage
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  isMobileError={isMobileError}
                />
              </>
            ) : (
              <Input type="text" placeholder="Email" setState={setEmail} />
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
                <TogglePassword
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  setState={setPassword}
                />
              </Box>
              <ErrorText
                showError={isError}
                errorText="Wrong email or password"
              />
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
          <Button
            isLoading={isLoading}
            onClick={handleUserAuthentication}
            label={
              showOTP
                ? "Continue"
                : isMobilePage
                ? "Send OTP"
                : isLoginPage
                ? "Login"
                : "Signup"
            }
          />
          <Typography
            onClick={handleResendCode}
            sx={{ textAlign: "center", color: "#6F6C90", cursor: "pointer" }}
          >
            {showOTP && "Resend the code"}
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
            <SocialLogin
              showFooter={!isMobilePage}
              auth={auth}
              setIsMobilePage={setIsMobilePage}
              setIsLoginPage={setIsLoginPage}
            />
            <RegisterFooterText
              footerText={
                isMobilePage
                  ? "Prefer email and password?"
                  : isLoginPage
                  ? "Don't have an account?"
                  : "Already have an account?"
              }
              handleToggleAuthMode={handleToggleAuthMode}
              toggleText={isLoginPage && !isMobilePage ? "Sign up" : "Log in"}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
