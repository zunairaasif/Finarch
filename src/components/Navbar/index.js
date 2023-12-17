import {
  Box,
  Menu,
  Grid,
  Dialog,
  Button,
  Toolbar,
  Snackbar,
  MenuItem,
  Checkbox,
  useTheme,
  TextField,
  Typography,
  useMediaQuery,
  Alert,
} from "@mui/material";
import axios from "axios";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import styles from "./styles";
import { pages } from "./data";
import DrawerComp from "./drawer";
import logo from "../../assets/images/logo.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [quote, setQuote] = useState([]);
  const [width, setWidth] = useState("");
  const [area, setArea] = useState(null);
  const [length, setLength] = useState("");
  const [plot, setPlot] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [color, setColor] = useState(null);
  const [propertyColor, setPropertyColor] = useState(null);
  const [checked, setChecked] = useState(true);
  const [services, setServices] = useState([]);
  const [open, setOpen] = React.useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [anchorEl, setAnchorEl] = useState(null);
  const [propertyPrice, setPropertyPrice] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [showError, setShowError] = useState(false);
  const [lengthError, setLengthError] = useState(false);
  const [widthError, setWidthError] = useState(false);
  const [plotError, setPlotError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMenuIconRotated, setMenuIconRotation] = useState(false);
  const [selectedSubServices, setSelectedSubServices] = useState([]);
  const [weightage, setWeightage] = useState([]);
  const [totalWeightage, setTotalWeightage] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!isMenuOpen);
    setMenuIconRotation((prevRotation) => !prevRotation);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setMenuIconRotation(false);
  };

  const handleReset = () => {
    setName("");
    setType("");
    setPlot("");
    setCity("");
    setWidth("");
    setPhone("");
    setEmail("");
    setStreet("");
    setLength("");
    setCountry("");
    setArea(null);
    setColor(null);
    setChecked(true);
    setHoveredIndex(null);
    setPropertyColor(null);
    setSelectedSubServices([]);
    setActiveStep(0);
  };

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [open]);

  const steps = [0, 1, 2, 3, 4, 5, 6];
  const propertyType = ["Commercial", "Residential", "Industrial", "Other"];

  const getServiceName = () => {
    // Initialize an empty array to store service names
    const selectedServiceNames = [];

    // Iterate over services array
    services.forEach((service, serviceIndex) => {
      // Check if any sub-service of the current service is selected
      const isSelected = service.subServices.some(
        (subService, subServiceIndex) =>
          selectedSubServices.includes(subService.name)
      );

      // If at least one sub-service is selected, add the service name to the array
      if (isSelected) {
        selectedServiceNames.push(service.service_name);
      }
    });

    // Join the array of service names into a string
    return selectedServiceNames.join(", ");
  };

  const handleNextClick = () => {
    switch (activeStep) {
      case 0:
        if (name.trim() === "") {
          setShowError(true);
        } else {
          setName(name);
          setShowError(false);
          setActiveStep((prevStep) => prevStep + 1);
        }
        break;

      case 1:
        if (selectedSubServices.length === 0) {
          setStep2(true);
        } else {
          setActiveStep((prevStep) => prevStep + 1);
        }

        break;

      case 2:
        if (type) {
          setActiveStep((prevStep) => prevStep + 1);
        } else {
          setStep3(true);
        }
        break;

      case 3:
        if (color === 4) {
          setArea(length * width);
        } else {
          setArea(sizes[color]?.area);
        }

        setPropertySize(sizes[color]?.size);
        setPropertyPrice(totalWeightage * area);

        if (area !== null && area !== undefined && area !== 0) {
          setActiveStep((prevStep) => prevStep + 1);
        }
        break;

      case 4:
        if (plot.trim() === "") {
          setPlotError(true);
        } else if (street.trim() === "") {
          setStreetError(true);
        } else if (city.trim() === "") {
          setCityError(true);
        } else if (country.trim() === "") {
          setCountryError(true);
        } else {
          setPlot(plot);
          setPlotError(false);
          setStreet(street);
          setStreetError(false);
          setCity(city);
          setCityError(false);
          setCountry(country);
          setCountryError(false);
          setActiveStep((prevStep) => prevStep + 1);
        }
        break;

      case 5:
        if (phone.trim() === "") {
          setPhoneError(true);
        } else {
          setPhone(phone);
          setPhoneError(false);
          setActiveStep((prevStep) => prevStep + 1);
        }
        break;

      default:
        if (email.trim() === "") {
          setEmailError(true);
        } else {
          setEmail(email);
          setEmailError(false);
          setActiveStep((prevStep) => prevStep + 1);
        }
        finish();
        break;

      // window.open(quote.pdf_url, "_blank");
    }
  };

  const finish = async () => {
    const postData = {
      name: name,
      email: email,
      contact_number: phone,
      country: country,
      city: city,
      block: street,
      house_plot: plot,
      propertySizeInSqft: area,
      property_size: propertySize,
      property_type: type,
      service_names: selectedSubServices,
      total_property_price: propertyPrice,
      total_rate: weightage,
    };

    try {
      await axios.post(`${baseUrl}/quotes/postQuotation`, postData);

      console.log("Data posted");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBackClick = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/service/getAllServices`)
      .then((response) => {
        const service = response.data.data;
        setServices(service);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [baseUrl]);

  const sizes = [
    {
      size: "5 Marla",
      area: 1125,
    },
    {
      size: "10 Marla",
      area: 2250,
    },
    {
      size: "1 Kanal",
      area: 4500,
    },
    {
      size: "2 Kanal",
      area: 9000,
    },
    {
      size: "Custom Size",
    },
  ];

  useEffect(() => {
    axios
      .get(`${baseUrl}/quotes/getQuotes`)
      .then((response) => {
        const quote = response.data.data;

        if (quote.length > 0) {
          const lastQuote = quote[quote.length - 1];
          setQuote(lastQuote);
        } else {
          console.log("No quotes available.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [baseUrl]);

  const handleCheckboxChange = (event, subServiceData, serviceData) => {
    if (event.target.checked) {
      setSelectedSubServices((prevSelected) => [
        ...prevSelected,
        subServiceData.name,
      ]);

      setWeightage((prevSelected) => [
        ...prevSelected,
        subServiceData.weightage * serviceData.rate,
      ]);
    } else {
      setSelectedSubServices((prevSelected) =>
        prevSelected.filter((selected) => selected !== subServiceData.name)
      );

      setWeightage((prevSelected) =>
        prevSelected.filter(
          (selected) => selected !== subServiceData.weightage * serviceData.rate
        )
      );
    }
  };

  useEffect(() => {
    const totalWeightage = weightage.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setTotalWeightage(totalWeightage);
  }, [weightage]);

  return (
    <Toolbar sx={isMatch ? styles.toolbarView : styles.toolbar}>
      <img
        src={logo}
        alt="Logo"
        width={isMatch ? "120px" : "190px"}
        onClick={() => navigate("/")}
      />

      {isMatch ? (
        <DrawerComp />
      ) : (
        <Grid sx={styles.grid}>
          <Grid container gap={2}>
            <Box sx={styles.quote} onClick={handleClickOpen}>
              <Typography variant="h6">Get a Quote</Typography>
            </Box>

            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <Snackbar
                open={step2}
                autoHideDuration={3000}
                TransitionComponent={Slide}
                onClose={() => setStep2(false)}
                TransitionProps={{ direction: "left" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert sx={styles.alert} severity="error">
                  <Typography variant="body1">
                    Please select a service!
                  </Typography>
                </Alert>
              </Snackbar>

              <Snackbar
                open={step3}
                autoHideDuration={3000}
                TransitionComponent={Slide}
                onClose={() => setStep3(false)}
                TransitionProps={{ direction: "left" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert sx={styles.alert} severity="error">
                  <Typography variant="body1">
                    Please select a proprty type!
                  </Typography>
                </Alert>
              </Snackbar>

              <Grid container sx={styles.quotePage}>
                <Grid
                  item
                  gap={5}
                  container
                  sx={
                    activeStep === 0 ? styles.container : styles.containerView
                  }
                  md={activeStep === 0 ? 6 : 10}
                >
                  {activeStep === 0 ? (
                    // || activeStep === 7
                    <CloseIcon sx={styles.font} onClick={handleClickClose} />
                  ) : (
                    <Grid container sx={styles.justify}>
                      <KeyboardBackspaceIcon
                        sx={styles.font}
                        onClick={handleBackClick}
                      />
                      <CloseIcon sx={styles.font} onClick={handleClickClose} />
                    </Grid>
                  )}

                  <Grid
                    container
                    sx={styles.info}
                    gap={activeStep === 3 || activeStep === 4 ? 3 : 5}
                  >
                    <Box gap={1} sx={styles.wrap}>
                      {
                        // activeStep === 7 ? (
                        //   <CheckCircleIcon sx={styles.icon} />
                        // ) : (
                        steps.map((step, index) => (
                          <Box
                            key={index}
                            sx={
                              index === activeStep
                                ? styles.stepperCompleted
                                : index < activeStep
                                ? styles.stepperCompleted
                                : styles.stepperCurrent
                            }
                          ></Box>
                        ))
                        // )
                      }
                    </Box>

                    {activeStep === 0 && (
                      <>
                        <Typography variant="h2">What is Your Name?</Typography>

                        <Box sx={styles.block}>
                          <TextField
                            value={name}
                            error={showError}
                            variant="outlined"
                            label="Enter your name"
                            onChange={(e) => {
                              setName(e.target.value);
                              setShowError(false);
                            }}
                          />
                          <Typography variant="body2" sx={styles.error}>
                            {showError ? "Please enter name to continue!" : ""}
                          </Typography>
                        </Box>
                      </>
                    )}

                    {activeStep === 1 && (
                      <>
                        <Typography variant="h3">
                          Services you are Interested In?
                        </Typography>

                        <Grid gap={2} container sx={styles.grid}>
                          {services?.map((serviceData, serviceIndex) => (
                            <Box
                              key={serviceIndex}
                              onClick={() => setHoveredIndex(serviceIndex)}
                              sx={{
                                ...styles.serviceBox,
                                transform:
                                  hoveredIndex === serviceIndex
                                    ? "rotateY(180deg)"
                                    : "rotateY(0deg)",
                              }}
                            >
                              <Box sx={styles.front}>
                                <Typography sx={styles.name}>
                                  {serviceData.service_name}
                                </Typography>
                              </Box>

                              <Box sx={styles.back}>
                                <Typography sx={styles.service}>
                                  {serviceData.service_name}
                                </Typography>

                                <Grid container sx={styles.backContent}>
                                  {serviceData.subServices.map(
                                    (subServiceData, subServiceIndex) => (
                                      <Box
                                        key={subServiceIndex}
                                        sx={styles.flex}
                                      >
                                        <Checkbox
                                          size="xsmall"
                                          checked={selectedSubServices.includes(
                                            subServiceData.name
                                          )}
                                          sx={{
                                            ...styles.checkbox,
                                            "&.Mui-checked": {
                                              color: "black",
                                            },
                                          }}
                                          onChange={(event) =>
                                            handleCheckboxChange(
                                              event,
                                              subServiceData,
                                              serviceData
                                            )
                                          }
                                        />
                                        <Typography
                                          variant="caption"
                                          key={subServiceIndex}
                                        >
                                          {subServiceData.name}
                                        </Typography>
                                      </Box>
                                    )
                                  )}
                                </Grid>
                              </Box>
                            </Box>
                          ))}
                        </Grid>
                      </>
                    )}

                    {activeStep === 2 && (
                      <>
                        <Typography variant="h4">
                          What is Your Property Type?
                        </Typography>

                        <Grid gap={2} container sx={styles.display}>
                          {propertyType.map((data, index) => (
                            <Box
                              key={index}
                              sx={{
                                ...styles.propertyBox,
                                backgroundColor:
                                  propertyColor === index
                                    ? "#f0eef0"
                                    : "transparent",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setPropertyColor(index);
                                setType(data);
                              }}
                            >
                              <Box sx={styles.property}>
                                <Typography variant="body1">{data}</Typography>
                              </Box>
                            </Box>
                          ))}
                        </Grid>
                      </>
                    )}

                    {activeStep === 3 && (
                      <>
                        <Typography variant="h4">
                          What is Your Property Size?
                        </Typography>

                        <Grid gap={2} container sx={styles.display}>
                          {sizes.map((data, index) => (
                            <Box
                              key={index}
                              sx={{
                                ...styles.propertyBox,
                                backgroundColor:
                                  color === index ? "#f0eef0" : "transparent",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                setColor(index);
                              }}
                            >
                              <Box sx={styles.property}>
                                <Typography variant="body1">
                                  {data.size}
                                </Typography>

                                {data.size === "Custom Size" ? null : (
                                  <Typography variant="body2">
                                    {`(${data.area}) Square Feet`}
                                  </Typography>
                                )}
                              </Box>
                            </Box>
                          ))}
                        </Grid>

                        {color === 4 && (
                          <Grid gap={2} container sx={styles.info}>
                            <Box sx={styles.grid}>
                              <Checkbox
                                size="xsmall"
                                checked={checked}
                                onChange={(event) => {
                                  setChecked(event.target.checked);
                                }}
                                sx={{
                                  ...styles.checkbox,
                                  "&.Mui-checked": {
                                    color: "black",
                                  },
                                }}
                              />
                              <Typography variant="body2">
                                Don't know the dimensions? Uncheck this to type
                                area
                              </Typography>
                            </Box>

                            {!checked && (
                              <Grid
                                item
                                md={6}
                                gap={2}
                                container
                                sx={styles.align}
                              >
                                <Box sx={styles.block}>
                                  <TextField
                                    size="small"
                                    type="number"
                                    value={length}
                                    error={lengthError}
                                    variant="outlined"
                                    label="Enter Length"
                                    onChange={(e) => {
                                      setLength(e.target.value);
                                      setLengthError(false);
                                    }}
                                  />
                                  <Typography variant="body2" sx={styles.error}>
                                    {lengthError ? "Please Enter Length!" : ""}
                                  </Typography>
                                </Box>

                                <Box sx={styles.block}>
                                  <TextField
                                    size="small"
                                    type="number"
                                    value={width}
                                    error={widthError}
                                    variant="outlined"
                                    label="Enter Width"
                                    onChange={(e) => {
                                      setWidth(e.target.value);
                                      setWidthError(false);
                                    }}
                                  />
                                  <Typography variant="body2" sx={styles.error}>
                                    {widthError ? "Please Enter Width!" : ""}
                                  </Typography>
                                </Box>
                              </Grid>
                            )}
                          </Grid>
                        )}
                      </>
                    )}

                    {activeStep === 4 && (
                      <>
                        <Typography variant="h3">Enter The Address!</Typography>

                        <Grid item md={6} gap={2} container sx={styles.align}>
                          <Box sx={styles.block}>
                            <TextField
                              value={plot}
                              error={plotError}
                              variant="outlined"
                              label="House/Plot Number"
                              onChange={(e) => {
                                setPlot(e.target.value);
                                setPlotError(false);
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {plotError
                                ? "Please Enter House/Plot Number!"
                                : ""}
                            </Typography>
                          </Box>

                          <Box sx={styles.block}>
                            <TextField
                              value={street}
                              error={streetError}
                              variant="outlined"
                              label="Block/Street Number"
                              onChange={(e) => {
                                setStreet(e.target.value);
                                setStreetError(false);
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {streetError
                                ? "Please Enter Block/Street Number!"
                                : ""}
                            </Typography>
                          </Box>

                          <Box sx={styles.block}>
                            <TextField
                              value={city}
                              error={cityError}
                              variant="outlined"
                              label="City"
                              onChange={(e) => {
                                setCity(e.target.value);
                                setCityError(false);
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {cityError ? "Please Enter Your City!" : ""}
                            </Typography>
                          </Box>

                          <Box sx={styles.block}>
                            <TextField
                              value={country}
                              error={countryError}
                              variant="outlined"
                              label="Country"
                              onChange={(e) => {
                                setCountry(e.target.value);
                                setCountryError(false);
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {countryError ? "Please Enter Your Country!" : ""}
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    )}

                    {activeStep === 5 && (
                      <>
                        <Typography variant="h3">
                          What is Your Phone Number?
                        </Typography>

                        <Grid container item md={6} sx={styles.align}>
                          <Box sx={styles.block}>
                            <TextField
                              value={phone}
                              type="tel"
                              error={phoneError}
                              variant="outlined"
                              label="Enter phone number"
                              onChange={(e) => {
                                const enteredPhone = e.target.value;
                                setPhone(enteredPhone);
                                setPhoneError(
                                  !/^(\+92)?\d{10}$|^\d{11}$/.test(enteredPhone)
                                );
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {phoneError ? "Invalid phone number!" : ""}
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    )}

                    {activeStep === 6 && (
                      <>
                        <Typography variant="h3">
                          What is Your Email Address?
                        </Typography>

                        <Grid container item md={6} sx={styles.align}>
                          <Box sx={styles.block}>
                            <TextField
                              value={email}
                              type="email"
                              error={emailError}
                              variant="outlined"
                              label="Enter Email"
                              onChange={(e) => {
                                const enteredEmail = e.target.value;
                                setEmail(enteredEmail);

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                setEmailError(!emailRegex.test(enteredEmail));
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {emailError ? "Invalid email address!" : ""}
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    )}

                    {/* {activeStep === 7 && (
                      <Box sx={styles.block}>
                        <Box sx={styles.lastStep}>
                          <Typography variant="h5" sx={styles.margin}>
                            The cost for your {getServiceName()} is '132000' PKR
                          </Typography>

                          <Typography variant="body1">
                            Thank you for obtaining a quote from FINARCH.
                          </Typography>
                          <Typography variant="body1">
                            Our manager will send your a written quote and call
                            you to discuss shortly.
                          </Typography>
                          <Typography variant="body1">
                            We have also sent the Quotation via Email to your
                            provided email address.
                          </Typography>
                        </Box>
                      </Box>
                    )} */}

                    <Button
                      fullWidth
                      sx={{
                        ...styles.btn,
                        width:
                          activeStep === 1
                            ? "45%"
                            : activeStep === 2
                            ? "40%"
                            : activeStep === 3
                            ? "40%"
                            : activeStep === 4
                            ? "38%"
                            : activeStep === 5
                            ? "38%"
                            : activeStep === 6
                            ? "38%"
                            : "75%",
                      }}
                      variant="contained"
                      onClick={handleNextClick}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Dialog>

            <Box
              sx={styles.shop}
              onClick={() => window.open("https://shop.finarch.co/", "_blank")}
            >
              <ShoppingBagOutlinedIcon fontSize="medium" />
            </Box>

            <Box sx={styles.menu} onClick={handleClick}>
              <MenuIcon
                fontSize="medium"
                sx={{
                  transform: isMenuIconRotated
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Grid>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {pages.map((page, index) => (
              <MenuItem
                key={index}
                onClick={() => {
                  if (page.name === "Careers") {
                    window.open(
                      "https://admin.finarch.co/careers/cdd166ca8c65ee9feb9e896fdd05e1ab",
                      "_blank"
                    );
                  } else {
                    navigate(page.link);
                  }
                  setMenuOpen(false);
                  setMenuIconRotation(false);
                }}
                sx={{
                  backgroundColor:
                    page.link === location.pathname ? "black" : "transparent",
                  color: page.link === location.pathname ? "white" : "inherit",
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                {page.name}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
      )}
    </Toolbar>
  );
};

export default Navbar;
