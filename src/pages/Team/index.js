import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const Team = () => {
  const theme = useTheme();
  const [team, setTeam] = useState([]);
  const [hover, setHover] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/team/getTeam`)
      .then((response) => {
        const teams = response.data.data;
        setTeam(teams);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [baseUrl]);

  return (
    <Grid>
      <Navbar />
      <Grid gap={2} container sx={isMatch ? styles.teamView : styles.team}>
        <Typography variant="h3" sx={styles.heading}>
          Team
        </Typography>

        <Grid
          container
          spacing={5}
          sx={isMatch ? styles.descriptionView : styles.description}
        >
          {isLoading ? (
            <Box sx={styles.loader}>
              <CircularProgress sx={styles.loaderColor} />
            </Box>
          ) : (
            team?.map((data, index) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={4}
                lg={4}
                gap={1}
                container
                key={index}
                sx={styles.container}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(null)}
              >
                <Box sx={styles.image}>
                  <img
                    alt={data.name}
                    loading="lazy"
                    src={data.image_url}
                    width="100%"
                  />
                </Box>

                <Box sx={styles.details}>
                  <Typography variant="body1">{data.name}</Typography>
                  <Typography variant="subtitle2">
                    <b>{data.job_post}</b>
                  </Typography>
                  {hover === index && (
                    <Typography variant="subtitle2">
                      {data.qualification}
                    </Typography>
                  )}
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
