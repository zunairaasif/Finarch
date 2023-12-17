import axios from "axios";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/loading-logo.svg";

const Home = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${baseUrl}/slider/getSlider`);
        const imageData = response.data.data;
        setImages(imageData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchSliderData();
  }, [baseUrl]);

  const settings = {
    speed: 500,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3500,
    pauseOnHover: false,
  };

  return (
    <>
      {isLoading ? (
        <Box gap={4} sx={styles.loader}>
          <img src={logo} alt="logo" width={200} />
          <CircularProgress sx={styles.loaderColor} />
        </Box>
      ) : (
        <Box sx={styles.cover}>
          <Navbar />
          {images.length > 0 && (
            <Slider {...settings}>
              {images.map((data) => (
                <img width={10} key={data.id} alt={data.id} src={data.image} />
              ))}
            </Slider>
          )}
        </Box>
      )}
    </>
  );
};

export default Home;
