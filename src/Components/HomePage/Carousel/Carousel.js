import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import secureLocalStorage from "react-secure-storage";
import axios from "axios";
import { toast } from "react-hot-toast";

import Button from "@/Components/Button/Button";
import Link from "next/link";

export default function CarouselComponent({
  srcArray,
  idArray,
  height,
  numberOfImages,
  padding,
  objectFit,
  linkArray,
  setDataChange,
}) {
  const userLoggedIn = secureLocalStorage.getItem("user");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(false);

  const [modal, setModal] = useState(false);
  const [id, setId] = useState("");

  useEffect(() => {
    if (userLoggedIn) {
      setIsAdmin(userLoggedIn?.role === "admin");
    }
  }, [userLoggedIn]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: numberOfImages,
    slidesToScroll: numberOfImages,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    adaptiveHeight: true,
  };

  const handleDeleteImage = async () => {
    if (!id) {
      return;
    }
    try {
      setLoading(true);
      await axios.delete(
        `https://polymerbazar-be.onrender.com/api/carousels/${id}`
      );

      toast.success("Successfully deleted carousel");
      setModal(false);
      setDataChange((prev) => !prev);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        margin: "0em -2em",
      }}
    >
      <dialog
        open={modal}
        style={{
          width: "300px",
          border: "none",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          position: "fixed",
          top: "40%",
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <Typography sx={{ fontSize: "1.2rem" }}>Are you sure?</Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Button label="Cancel" onClick={() => setModal(false)} outline />
            <Button
              label="Delete"
              onClick={handleDeleteImage}
              isLoading={loading}
            />
          </Box>
        </Box>
      </dialog>
      <Slider {...settings}>
        {srcArray.map((src, index) => (
          <React.Fragment key={idArray ? idArray[index] : index}>
            {isAdmin && idArray && (
              <>
                <Box
                  sx={{
                    padding: "1em",
                    my: "1em",
                    borderRadius: "4px",
                    cursor: "pointer",
                    border: "2px solid #bebfc2",
                  }}
                  onClick={() => {
                    setModal(true);
                    setId(idArray[index]);
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    Delete Image
                  </Typography>
                </Box>
              </>
            )}
            <Box
              sx={{
                padding: padding ? padding : 0,
              }}
            >
              {linkArray ? (
                <Link href={linkArray[index]}>
                  <img
                    src={src}
                    style={{
                      objectFit: objectFit,
                      width: "100%",
                    }}
                    alt="carousel-display"
                    height={height}
                  />
                </Link>
              ) : (
                <img
                  src={src}
                  style={{
                    objectFit: objectFit,
                    width: "100%",
                  }}
                  alt="carousel-display"
                  height={height}
                />
              )}
            </Box>
          </React.Fragment>
        ))}
      </Slider>
    </Box>
  );
}
