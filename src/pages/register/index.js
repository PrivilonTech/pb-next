import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import "react-phone-input-2/lib/style.css";
import { MuiOtpInput } from "mui-one-time-password-input";
import { toast } from "react-hot-toast";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

import firebaseApp from "../../firebase/clientApp";
import {
  createNewUser,
  getCurrentDate,
  getUserByEmail,
  getUserByPhone,
} from "@/utils/utilsUser";
import { loginMessage, registerMessage } from "@/utils/mail";
import { sendMail } from "@/utils/apiCalls";

import HeaderTitle from "@/Components/Register/HeaderTitle";
import ErrorText from "@/Components/Register/ErrorText";
import SocialLogin from "@/Components/Register/SocialLogin";
import RegisterFooterText from "@/Components/Register/RegisterFooterText";
import Input from "@/Components/Register/Input";
import Button from "@/Components/Button/Button";
import MobilePage from "@/Components/Register/MobilePage";
import TogglePassword from "@/Components/Register/TogglePassword";
import ShowBackArrow from "@/Components/Register/ShowBackArrow";
import useRegisterInfo from "@/hooks/useRegisterInfo";

export default function Register() {
  const router = useRouter();
  const auth = getAuth(firebaseApp);
  const { setInputs } = useRegisterInfo();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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
  const createAccount = async (email, password) => {
    setIsLoading(true);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      toast.error("Email already in use");
      setIsLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        //create new user in the database
        await createNewUser({
          uid: userCredential.user.uid,
          displayName: name,
          email: userCredential.user.email,
          role: "user",
          subscribed: false,
          createdAt: getCurrentDate(),
        });

        setInputs({ email: userCredential.user.email });

        const { subject, content } = registerMessage(name);
        sendMail(userCredential.user.email, subject, content);

        router.push("/details");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be atleast 6 characters");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Sign in an existing user
  const signIn = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(async () => {
        // Signed in successfully
        const existingUser = await getUserByEmail(email);

        const { subject, content } = loginMessage(existingUser.displayName);
        sendMail(email, subject, content);

        router.push("/");
      })
      .catch((error) => {
        setIsError(true);
        if (error.code === "auth/user-not-found") {
          toast.error("Account doesn't exist");
        }
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
        toast.success("One time password sent");
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
        const existingUser = await getUserByPhone("+" + phoneNumber);

        if (!existingUser) {
          await createNewUser({
            uid: auth.currentUser.uid,
            displayName: name,
            phone: `+${phoneNumber}`,
            role: "user",
            subscribed: false,
            createdAt: getCurrentDate(),
          });
        }

        if (existingUser?.email) {
          const { subject, content } = loginMessage(name);
          sendMail(existingUser?.email, subject, content);
        }

        if (existingUser?.company) {
          return router.push("/");
        }

        setInputs({ phone: `+${phoneNumber}` });
        router.push("/details");
      })
      .catch((error) => {
        console.log("error", error);
        setIsMobileError(true);
      })
      .finally(() => {
        setIsLoading(false);
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
      <ShowBackArrow />
      <Box id="recaptcha-container"></Box>
      <Box
        sx={{
          height: { xs: "100%", sm: "auto" },
          width: { xs: "100%", sm: "400px" },
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
          {!isLoginPage && (
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: ".25em" }}
            >
              <Typography sx={{ color: "#2d333a", fontSize: ".95rem" }}>
                {!showOTP && "Name"}
              </Typography>
              {!showOTP && (
                <Input type="text" placeholder="Name" setState={setName} />
              )}
            </Box>
          )}
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
          {showOTP && (
            <Box
              sx={{ display: "flex", gap: ".25em", justifyContent: "center" }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#6F6C90",
                  fontSize: ".9rem",
                }}
              >
                Didn't receive OTP code?
              </Typography>
              <Typography
                onClick={() => handleSendCode()}
                sx={{ color: "#c31815", fontSize: ".9rem", cursor: "pointer" }}
              >
                Resend
              </Typography>
            </Box>
          )}
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
