import {
  Box,
  Grid,
  Slide,
  Alert,
  Button,
  Snackbar,
  useTheme,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";
import * as Yup from "yup";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CircularProgress from "@mui/material/CircularProgress";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const Contact = () => {
  const theme = useTheme();
  const [contact, setContact] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [successSnackbar, setSuccessSnackbar] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseUrl}/contact/getOffices`)
      .then((response) => {
        const contacts = response.data.data;
        setContact(contacts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [baseUrl]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(25).required("Required"),
    phone: Yup.string()
      .matches(/^(\+92)?\d{10}$|^\d{11}$/, "Invalid phone number")
      .required("Required"),
    message: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await axios.post(`${baseUrl}/contact/postContactForm`, values);
      setSuccessSnackbar(true);
      resetForm();
    } catch (error) {
      console.error("Error:", error);
      setErrorSnackbar(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Grid>
      <Navbar />

      <Snackbar
        open={errorSnackbar}
        autoHideDuration={3000}
        TransitionComponent={Slide}
        onClose={() => setErrorSnackbar(false)}
        TransitionProps={{ direction: "left" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert sx={styles.alert} severity="error">
          <Typography variant="body1">Error submitting data!</Typography>
        </Alert>
      </Snackbar>

      <Snackbar
        open={successSnackbar}
        autoHideDuration={3000}
        TransitionComponent={Slide}
        onClose={() => setSuccessSnackbar(false)}
        TransitionProps={{ direction: "left" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert sx={styles.alert} severity="success">
          <Typography variant="body1">Data submitted successfully!</Typography>
        </Alert>
      </Snackbar>

      <Grid container sx={styles.wrapper}>
        <Grid
          item
          md={8}
          container
          sx={styles.spacings}
          spacing={isMatch ? 5 : 0}
        >
          <Grid item md={5} gap={5} container sx={styles.contact}>
            <Typography variant="h4">Our Locations</Typography>

            {isLoading ? (
              <Box sx={styles.loader}>
                <CircularProgress sx={styles.loaderColor} />
              </Box>
            ) : (
              contact?.map((data, index) => (
                <Grid key={index} sx={styles.block}>
                  <Grid gap={1} container sx={styles.address}>
                    <Box gap={1} sx={styles.icon}>
                      <LocationOnIcon fontSize="xsmall" />
                      <Typography variant="body2">
                        <b>{data.name}</b>
                      </Typography>
                    </Box>

                    <Typography variant="body2">{data.address}</Typography>

                    <Box gap={1} sx={styles.icon}>
                      <CallIcon fontSize="xsmall" />
                      <Typography variant="body2">
                        <b>{data.phone}</b>
                      </Typography>
                    </Box>

                    <Box gap={1} sx={styles.icon}>
                      <EmailIcon fontSize="xsmall" />
                      <Typography variant="body2">
                        <b>{data.email}</b>
                      </Typography>
                    </Box>
                  </Grid>

                  <iframe
                    title="Google Map"
                    loading="lazy"
                    width="100%"
                    height="170"
                    allowFullScreen
                    src={data.location}
                    style={styles.map}
                  ></iframe>
                </Grid>
              ))
            )}
          </Grid>

          <Grid item md={6} gap={5} container sx={styles.contact}>
            <Typography variant="h4">Get in Touch With Us</Typography>

            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={{ name: "", phone: "", message: "" }}
            >
              {({ isSubmitting }) => (
                <Grid container>
                  <Form style={styles.form}>
                    <Box sx={styles.spacing}>
                      <Field
                        fullWidth
                        name="name"
                        as={TextField}
                        variant="outlined"
                        label="Enter your name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        style={styles.error}
                      />
                    </Box>

                    <Box sx={styles.spacing}>
                      <Field
                        fullWidth
                        name="phone"
                        as={TextField}
                        variant="outlined"
                        label="Enter mobile number"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        style={styles.error}
                      />
                    </Box>

                    <Box sx={styles.spacing}>
                      <Field
                        rows={4}
                        multiline
                        fullWidth
                        name="message"
                        as={TextField}
                        variant="outlined"
                        label="Enter your message"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        style={styles.error}
                      />
                    </Box>

                    <Button
                      fullWidth
                      type="submit"
                      sx={styles.button}
                      variant="contained"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </Form>
                </Grid>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
