import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid, useTheme, Typography, useMediaQuery } from "@mui/material";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const News = () => {
  const theme = useTheme();
  const containerRef = useRef(null);
  const [blog, setBlog] = useState([]);
  const [images, setImages] = useState([]);
  const [startX, setStartX] = useState(null);
  const [animate, setAnimate] = useState("");
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/blog/getBlogs`)
      .then((response) => {
        const blogs = response.data.data;
        setBlog(blogs);

        const image = response.data.data.map((data) => data.image);
        setImages(image);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [baseUrl]);

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
      <Grid gap={6} container sx={styles.news}>
        {isLoading ? (
          <Box sx={styles.loader}>
            <CircularProgress sx={styles.loaderColor} />
          </Box>
        ) : blog.length > 0 ? (
          blog.map((data, index) => {
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
                          <Typography variant="caption">
                            <b>Title</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.title}
                          </Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Description</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.description}
                          </Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Author</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.author}
                          </Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Category</b>
                          </Typography>
                          <Typography variant="caption">
                            {data.category}
                          </Typography>
                        </Box>

                        <Box sx={styles.info}>
                          <Typography variant="caption">
                            <b>Tags</b>
                          </Typography>
                          <Typography variant="caption">{data.tags}</Typography>
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
                            <Grid container item xs={6} sx={styles.wrapper}>
                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Title</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.title}
                                </Typography>
                              </Box>

                              <Box sx={styles.info}>
                                <Typography variant="caption">
                                  <b>Description</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.description}
                                </Typography>
                              </Box>

                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Author</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.author}
                                </Typography>
                              </Box>
                            </Grid>

                            <Grid container item xs={5} sx={styles.wrapper}>
                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Category</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.category}
                                </Typography>
                              </Box>

                              <Box sx={styles.wrapper}>
                                <Typography variant="caption">
                                  <b>Tags</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.tags}
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
                            <Typography variant="caption">
                              <b>Title</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.title}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Description</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.description}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Author</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.author}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Category</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.category}
                            </Typography>
                          </Box>

                          <Box sx={styles.info}>
                            <Typography variant="caption">
                              <b>Tags</b>
                            </Typography>
                            <Typography variant="caption">
                              {data.tags}
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
        ) : (
          <Box sx={styles.noData}>
            <Typography variant="h5">No Blogs Yet!</Typography>
          </Box>
        )}
      </Grid>
    </>
  );
};

export default News;
