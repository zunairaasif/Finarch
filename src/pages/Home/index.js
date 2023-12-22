import axios from "axios";
import React, { useEffect } from "react";
import SwipeableViews from "react-swipeable-views";
import { Box, useTheme, Stack } from "@mui/material";
import { autoPlay } from "react-swipeable-views-utils";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

import {
  setImages,
  setLoading,
  setActiveStep,
} from "../../components/Redux/Reducers/homeSlice";
import styles from "./styles";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/loading-logo.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Home = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const { images, loading, activeStep } = useSelector((state) => state.home);

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await axios.get(`${baseUrl}/slider/getSlider`);
        const imageData = response.data.data;
        dispatch(setImages(imageData));
        dispatch(setLoading(false));
      } catch (error) {
        console.error("Error:", error);
        dispatch(setLoading(false));
      }
    };

    fetchSliderData();
  }, [baseUrl, dispatch]);

  const handleStepChange = (step) => {
    dispatch(setActiveStep(step));
  };

  return (
    <>
      {loading ? (
        <Box gap={4} sx={styles.loader}>
          <img src={logo} alt="logo" width={200} />
          <CircularProgress sx={styles.loaderColor} />
        </Box>
      ) : (
        <Stack sx={styles.cover}>
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
        </Stack>
      )}
    </>
  );
};

export default Home;
