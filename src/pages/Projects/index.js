import {
  Box,
  Tab,
  Grid,
  Tabs,
  useTheme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const Projects = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [startX, setStartX] = useState(null);
  const [project, setProject] = useState([]);
  const [animate, setAnimate] = useState("");
  const [value, setValue] = React.useState(0);
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/projects/getAllProjects`)
      .then((response) => {
        const projects = response.data.data;
        setProject(projects);

        const image = response.data.data.map((data) => data.project_images);
        setImages(image);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [baseUrl]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getTabType = (tabIndex) => {
    switch (tabIndex) {
      case 1:
        return "Residential";
      case 2:
        return "Commercial";
      case 3:
        return "Urban";
      case 4:
        return "Industrial";
      default:
        return "";
    }
  };

  const filteredProjects =
    value === 0
      ? project
      : project.filter((data) => data.type === getTabType(value));

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const x = e.pageX;
      const walk = (x - startX) * 2; // Adjust the scrolling speed if needed

      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && containerRef.current) {
      const x = e.touches[0].pageX;
      const walk = (x - startX) * 2; // Adjust the scrolling speed if needed
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleTouchEnd = () => {
    if (containerRef.current) {
      setIsDragging(false);
    }
  };

  return (
    <>
      <Navbar />
      <Grid gap={6} container sx={styles.projects}>
        <Box sx={styles.tabs}>
          <Tabs
            variant="scrollable"
            scrollButtons="auto"
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: { backgroundColor: "black" },
            }}
          >
            <Tab
              sx={value === 0 ? styles.tabColor : styles.tab}
              label="All Projects"
            />
            <Tab
              sx={value === 1 ? styles.tabColor : styles.tab}
              label="Residential"
            />
            <Tab
              sx={value === 2 ? styles.tabColor : styles.tab}
              label="Commercial"
            />
            <Tab
              sx={value === 3 ? styles.tabColor : styles.tab}
              label="Urban"
            />
            <Tab
              sx={value === 4 ? styles.tabColor : styles.tab}
              label="Industrial"
            />
          </Tabs>
        </Box>

        {isLoading ? (
          <Box sx={styles.loader}>
            <CircularProgress sx={styles.loaderColor} />
          </Box>
        ) : (value === 0 ||
            value === 1 ||
            value === 2 ||
            value === 3 ||
            value === 4) &&
          filteredProjects.length === 0 ? (
          <Typography variant="body1" sx={styles.noData}>
            No Project Yet!
          </Typography>
        ) : (
          filteredProjects.map((data, index) => {
            const parsedImages = JSON.parse(images[index]);
            return (
              <Grid
                item
                xs={10}
                sm={9.5}
                md={9.5}
                container
                key={index}
                onClick={() => setAnimate(index)}
                sx={animate === index ? styles.zoom : styles.container}
              >
                {animate === index ? (
                  <div
                    ref={containerRef}
                    style={styles.scroll}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchMove}
                    onTouchStart={handleTouchStart}
                  >
                    <Box gap={10} sx={styles.flex}>
                      <Grid gap={2} sx={styles.wrapper}>
                        <Box sx={styles.info}>
                          <Typography variant="body1">
                            <b>{data.name}</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.location}
                          </Typography>
                          <Typography variant="caption">{data.year}</Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Client</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.client}
                          </Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Type</b>
                          </Typography>
                          <Typography variant="caption">{data.type}</Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Size M2/FT2</b>
                          </Typography>
                          <Typography variant="caption">{data.size}</Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Status</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.status}
                          </Typography>
                        </Box>
                      </Grid>

                      {parsedImages.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          height={300}
                          loading="lazy"
                          alt={index + 1}
                          style={styles.img}
                          width={isMatch ? "100%" : "35%"}
                        />
                      ))}
                    </Box>
                  </div>
                ) : (
                  <Grid container gap={5}>
                    {isMatch ? (
                      <>
                        <Grid item md={4} gap={2} sx={styles.wrapper}>
                          {parsedImages.map(
                            (image, index) =>
                              index === 0 && (
                                <Grid item md={3} key={index}>
                                  <img
                                    src={image}
                                    width="100%"
                                    height={300}
                                    alt={index + 1}
                                  />
                                </Grid>
                              )
                          )}
                          <Grid container sx={styles.wrapperView}>
                            <Grid container sx={styles.title}>
                              <Typography variant="body1">
                                <b>{data.name}</b>
                              </Typography>
                            </Grid>

                            <Grid container item xs={6} sx={styles.wrapper}>
                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Client</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.client}
                                </Typography>
                              </Box>

                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Type</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.type}
                                </Typography>
                              </Box>

                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Location</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.location}
                                </Typography>
                              </Box>
                            </Grid>

                            <Grid container item xs={5} sx={styles.wrapper}>
                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Size M2/FT2</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.size}
                                </Typography>
                              </Box>

                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Year</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.year}
                                </Typography>
                              </Box>

                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Status</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.status}
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Grid item md={4} gap={2} sx={styles.wrapper}>
                          <Box sx={styles.info}>
                            <Typography variant="body1">
                              <b>{data.name}</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.location}
                            </Typography>
                            <Typography variant="caption">
                              {data.year}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Client</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.client}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Type</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.type}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Size M2/FT2</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.size}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Status</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.status}
                            </Typography>
                          </Box>
                        </Grid>

                        {parsedImages.map(
                          (image, index) =>
                            index === 0 && (
                              <Grid item md={3} key={index}>
                                <img
                                  src={image}
                                  width="100%"
                                  height={300}
                                  alt={index + 1}
                                />
                              </Grid>
                            )
                        )}
                      </>
                    )}
                  </Grid>
                )}
              </Grid>
            );
          })
        )}
      </Grid>
    </>
  );
};

export default Projects;
