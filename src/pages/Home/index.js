import axios from "axios";
import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, useTheme } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/loading-logo.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home = () => {
  const theme = useTheme();
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

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      {isLoading ? (
        <Box gap={4} sx={styles.loader}>
          <img src={logo} alt="logo" width={200} />
          <CircularProgress sx={styles.loaderColor} />
        </Box>
      ) : (
        <div>
          <Navbar />

          {images.length > 0 && (
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={styles.slider}
            >
              {images.map((data, index) => (
                <div key={index} style={styles.imgContainer}>
                  <img style={styles.img} src={data.image} alt={index} />
                </div>
              ))}
            </AutoPlaySwipeableViews>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
