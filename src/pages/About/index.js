import axios from "axios";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const About = () => {
  const theme = useTheme();
  const [services, setServices] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/service/getAllServices`)
      .then((response) => {
        const service = response.data.data;
        setServices(service);
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
      <Grid gap={2} container sx={isMatch ? styles.aboutView : styles.about}>
        <Typography variant="h3" sx={styles.heading}>
          About
        </Typography>

        <Grid
          gap={2}
          container
          sx={isMatch ? styles.descriptionView : styles.description}
        >
          <Typography variant="body1">
            We are pleased to take this opportunity to introduce our self as an
            Architectural Concern, engaged in the field of building Industry for
            the last twenty four years. During this noticeable period of time,
            our organization has designed international famed projects.
          </Typography>
          <Typography variant="body1">
            Our well organized professional's inhouse setup for different fields
            of building industry and high-tech office use equipment of future
            technology have made it possible to run along the times. What so
            ever the scale, type, and the nature of the project maybe, our
            in-house and associated network of Architects, Engineers, Interior
            Designers, and Construction Managers are always ready to accept the
            challenges for the satisfaction of our prestigious clients.
          </Typography>
          <Typography variant="body1">
            FINARCH, our firm, has got remarkable position in the fields of
            Architecture Designing and Housing Projects by creating valuable
            venture in the past at local and international platform. Wining of
            international design competition for Michael Jackson University of
            South Africa and Daewoo Pakistan Express Bus Terminals made a
            fabulous recognition in international community of architects.
            Similarly design concept of DHA Golf Course Villas is living example
            of most wanted residences at Lahore. Broadway of DHA Phase 8, a
            commercial corridor of its unique nature is a remaining outcome of
            DHA International Trade Zone.
          </Typography>
          <Typography variant="body1">
            Tremendous appreciation of Valley Homes, Mirpur Azad Kashmir has
            boosted up the prestige of the design and demand of the FINARCH's
            involvement in housing projects. Other than these mega projects
            FINARCH has designed many more small and medium sized Towns and
            Housing Colonies in various cities of Pakistan.
          </Typography>
          <Typography variant="body1">
            FINARCH as an architectural organization, who has worked on Leaders
            Inn Hotel, 15 Storied tall tower at Montgomery Road Lahore, Bravo
            Suites Hotel at Canal Bank Lahore, Cadet College Sialkot, Design of
            Ali- Zeb Tower, IBMT Hospital of 125 beds in Sialkot, Passion Plaza
            in DHA, Welfare Projects of Divisional Medical Centre & Troops
            Family's Welfare Centre at Kharian Cantt, Hostels for Lahore Medical
            & Dental College, Chawla Rubber & Plastic Industries, an office
            building Square One Gulberg, Mixed Use Multi Storied Building AWT
            Plaza Gulberg, Multi Use High-rise Building of China Gate at Mirpur
            AK, Central Park Medical College Lahore, and several Skyscrapers in
            DHA, Phase 8 and Gulberg Lahore.
          </Typography>
          <Typography variant="body1">
            In this way FINARCH has contributed a lot in the built environment
            of different important cities of Pakistan by the excellent design
            projects of Hospitals, Hotels, Commercial Plazas, Restaurants,
            Industries, Mosques, and several Residences. FINARCH has also got
            the privilege to design, develop and sell independent Villas and
            Bungalows in different parts of Lahore City. FINARCH's outstanding
            and current projects include the highest most mixed use building of
            Lahore "PACE TOWER" Gulberg, "PACE SUPER MALL" Lahore Cantt, The
            Palm Apartments Islamabad, Madni Gardens Housing Scheme, Hassan
            Scholar's Public School, Kingra Sialkot and Abudullah City Narowal.
          </Typography>

          <Grid container spacing={2} sx={styles.subServices}>
            {isLoading ? (
              <Box sx={styles.loader}>
                <CircularProgress sx={styles.loaderColor} />
              </Box>
            ) : (
              services?.map((data, index) => (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={4}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Box
                    sx={{
                      ...styles.serviceBox,
                      transform:
                        hoveredIndex === index
                          ? "rotateY(180deg)"
                          : "rotateY(0deg)",
                    }}
                  >
                    <Box sx={styles.front}>
                      <Typography sx={styles.name} variant="h6">
                        {data.service_name}
                      </Typography>
                    </Box>

                    <Box sx={styles.back}>
                      <Typography sx={styles.service} variant="h6">
                        {data.service_name}
                      </Typography>
                      <Grid container gap={1} sx={styles.backContent}>
                        {data.subServices.map((data, index) => (
                          <Typography
                            variant={isMatch ? "caption" : "body2"}
                            key={index}
                          >
                            {data.name}
                          </Typography>
                        ))}
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
