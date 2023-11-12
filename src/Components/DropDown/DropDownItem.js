import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function DropDownItem({
  data,
  selectedOption,
  setIsDropDownOpen,
  setSelectedOption,
}) {
  const handleSelectionOption = (option) => {
    setSelectedOption(option);
    setIsDropDownOpen(false);
  };

  useEffect(() => {
    //close user profile menu
    window.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        setIsDropDownOpen(false);
      }
    });
  }, []);

  return (
    <motion.div initial={{ y: 0 }} animate={{ y: 20 }} exit={{ y: 0 }}>
      <Box
        sx={{
          width: "auto",
          minWidth: "110px",
          position: "absolute",
          left: { sm: "10px", md: "30px" },
          marginTop: "-.5em",
          borderRadius: "10px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          background: "#e7e4e4",
          boxShadow: "4px 4px 8px #c2c0c0, -4px -4px 8px #ffffff",
          overflow: "hidden",
        }}
      >
        {data.map((option, index) => (
          <Box
            key={index}
            sx={{
              padding: ".5em 1em",
              overflow: "hidden",
              borderTop: "1px solid #e3c0c0",
              background: selectedOption === option ? "#c31815" : "#dfdfdf",
              "&:hover": {
                background: selectedOption === option ? "#c31815" : "#c7c7c7",
              },
              transition: "background 150ms ease-in",
              cursor: "pointer",
            }}
            onClick={() => handleSelectionOption(option)}
          >
            <Typography
              sx={{
                color: selectedOption === option ? "white" : "#575757",
              }}
            >
              {option}
            </Typography>
          </Box>
        ))}
      </Box>
    </motion.div>
  );
}

export const NavDropDownItem = ({
  item,
  href,
  isDropDownOpen,
  setIsDropDownOpen,
}) => {
  const router = useRouter();
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  if (!isDropDownOpen) return;

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: 20 }}
      exit={{ y: 0 }}
      onMouseEnter={() => setIsSubDropdownOpen(true)}
      onMouseLeave={() => setIsSubDropdownOpen(false)}
    >
      <Box
        onClick={() => href && router.push(href)}
        sx={{
          padding: ".5em 1em",
          borderTop: "1px solid #e3c0c0",
          "&:hover": {
            color: "#d9232a",
          },
          transition: "color 150ms ease-in",
        }}
      >
        <Typography>{item.section}</Typography>
      </Box>
      <Box
        sx={{
          minWidth: "180px",
          position: "absolute",
          borderRadius: "10px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          zIndex: 99999,
          left: -90,
          top: "0px",
        }}
      >
        {item.subItems &&
          item.subItems.map((subItem) => (
            <SubDropdownItem
              key={subItem.id}
              subItem={subItem}
              isSubDropdownOpen={isSubDropdownOpen}
              setIsSubDropdownOpen={setIsSubDropdownOpen}
              setIsDropDownOpen={setIsDropDownOpen}
            />
          ))}
      </Box>
    </motion.div>
  );
};

const SubDropdownItem = ({
  subItem,
  isSubDropdownOpen,
  setIsSubDropdownOpen,
  setIsDropDownOpen,
}) => {
  const router = useRouter();

  if (!isSubDropdownOpen) return;

  const handleRouting = () => {
    router.push(subItem.href);
    setIsSubDropdownOpen(false);
    setIsDropDownOpen(false);
  };

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: -90 }}
      exit={{ x: 0 }}
      style={{ background: "#e5e5e5" }}
    >
      <Box
        onClick={handleRouting}
        sx={{
          padding: ".5em 1em",
          borderTop: "1px solid #e3c0c0",
          "&:hover": {
            color: "#d9232a",
          },
          transition: "color 150ms ease-in",
        }}
      >
        <Typography>{subItem.section}</Typography>
      </Box>
    </motion.div>
  );
};
