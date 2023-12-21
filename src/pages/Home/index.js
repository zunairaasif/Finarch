import axios from "axios";
import { Box, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
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
        <Box sx={styles.cover}>
          <Navbar />
          {images.length > 0 && (
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{
                height: "88vh",
                overflow: "hidden",
              }}
            >
              {images.map((data, index) => (
                <div
                  key={index}
                  style={{
                    height: "88vh",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "fill",
                    }}
                    src={data.image}
                    alt={index}
                  />
                </div>
              ))}
            </AutoPlaySwipeableViews>
          )}
        </Box>
      )}
    </>
  );
};

export default Home;
