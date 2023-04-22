import React from "react";
import ErrorText from "./ErrorText";
import PhoneInput from "react-phone-input-2";

export default function MobilePage({
  phoneNumber,
  setPhoneNumber,
  isMobileError,
}) {
  return (
    <>
      <PhoneInput
        placeholder="Phone Number"
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
      <ErrorText
        showError={isMobileError}
        errorText="Error sending one time password"
      />
    </>
  );
}
