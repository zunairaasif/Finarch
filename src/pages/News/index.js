import axios from "axios";
import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

import styles from "./styles";
import Navbar from "../../components/Navbar";
import logo from "../../assets/images/loading-logo.svg";

const News = () => {
  const theme = useTheme();
  const [blog, setBlog] = useState([]);
  const [images, setImages] = useState([]);
  const [animate, setAnimate] = useState("");
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;
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

  return (
    <>
      {isLoading ? (
        <Box gap={4} sx={styles.loader}>
          <img src={logo} alt="logo" width={200} />
          <CircularProgress sx={styles.loaderColor} />
        </Box>
      ) : (
        <>
          <Navbar />
          <Grid sx={styles.news}>
            {blog && blog.length > 0 ? (
              blog.map((data, index) => {
                const parsedImages = JSON.parse(images[index]);
                return (
                  <Grid
                    item
                    md={9.5}
                    sm={9.5}
                    xs={10}
                    container
                    key={index}
                    onClick={() => setAnimate(index)}
                    style={
                      animate === index ? styles.animate : styles.container
                    }
                  >
                    {animate === index ? (
                      <div style={styles.animation}>
                        <Box gap={1} sx={{ display: "flex" }}>
                          <Grid gap={2} sx={styles.wrapper}>
                            <Box sx={styles.info}>
                              <Typography variant="body1">
                                <b>{data.title}</b>
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

                            <Box sx={styles.info}>
                              <Typography variant="caption">
                                <b>Description</b>
                              </Typography>
                              <Typography variant="caption">
                                {data.description}
                              </Typography>
                            </Box>
                          </Grid>

                          {parsedImages.map((image, index) => (
                            <img
                              src={image}
                              width={isMatch ? "100%" : "40%"}
                              height={300}
                              loading="lazy"
                              alt={index + 1}
                              style={{ margin: "0 10px" }}
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
                                    <b>{data.title}</b>
                                  </Typography>
                                </Grid>

                                <Grid container item xs={6} sx={styles.wrapper}>
                                  <Box sx={styles.wrapper}>
                                    <Typography variant="caption">
                                      <b>Author</b>
                                    </Typography>
                                    <Typography variant="caption">
                                      {data.author}
                                    </Typography>
                                  </Box>

                                  <Box sx={styles.wrapper}>
                                    <Typography variant="caption">
                                      <b>Category</b>
                                    </Typography>
                                    <Typography variant="caption">
                                      {data.category}
                                    </Typography>
                                  </Box>
                                </Grid>

                                <Grid container item xs={5} sx={styles.wrapper}>
                                  <Box sx={styles.wrapper}>
                                    <Typography variant="caption">
                                      <b>Tags</b>
                                    </Typography>
                                    <Typography variant="caption">
                                      {data.tags}
                                    </Typography>
                                  </Box>

                                  <Box sx={styles.wrapper}>
                                    <Typography variant="caption">
                                      <b>Description</b>
                                    </Typography>
                                    <Typography variant="caption">
                                      {data.description}
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
                                  <b>{data.title}</b>
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

                              <Box sx={styles.info}>
                                <Typography variant="caption">
                                  <b>Description</b>
                                </Typography>
                                <Typography variant="caption">
                                  {data.description}
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
              <Typography variant="h6" sx={styles.noData}>
                No Blogs posted yet!
              </Typography>
            )}
          </Grid>
        </>
      )}
    </>
  );
};

export default News;
