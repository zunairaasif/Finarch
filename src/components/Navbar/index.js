import {
  Box,
  Menu,
  Grid,
  Alert,
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
} from "@mui/material";
import axios from "axios";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import styles from "./styles";
import { pages } from "./data";
import DrawerComp from "./drawer";
import logo from "../../assets/images/logo.svg";
import loaderLogo from "../../assets/images/loading-logo.svg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [plot, setPlot] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");
  const [quote, setQuote] = useState([]);
  const [width, setWidth] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState(null);
  const [color, setColor] = useState(null);
  const [length, setLength] = useState("");
  const [street, setStreet] = useState("");
  const [step1, setStep1] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [country, setCountry] = useState("");
  const [loader, setLoader] = useState(false);
  const [checked, setChecked] = useState(true);
  const [services, setServices] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const [anchorEl, setAnchorEl] = useState(null);
  const [weightage, setWeightage] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showError, setShowError] = useState(false);
  const [plotError, setPlotError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [openFinal, setOpenFinal] = useState(false);
  const [serviceName, setServiceName] = useState([]);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [widthError, setWidthError] = useState(false);
  const [propertySize, setPropertySize] = useState("");
  const [lengthError, setLengthError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [propertyColor, setPropertyColor] = useState(null);
  const [propertyPrice, setPropertyPrice] = useState(null);
  const [totalWeightage, setTotalWeightage] = useState(null);
  const [flippedServices, setFlippedServices] = useState([]);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [isMenuIconRotated, setMenuIconRotation] = useState(false);
  const [selectedSubServices, setSelectedSubServices] = useState([]);

  //************* OPEN QUOTATION ********** */

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  //************* RESET ********** */

  const handleReset = () => {
    setActiveStep(0);

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
    setWeightage([]);
    setServiceName([]);
    setPropertySize("");
    setPropertyPrice("");
    setFlippedServices([]);
    setPropertyColor(null);
    setTotalWeightage(null);
    setSelectedSubServices([]);
  };

  useEffect(() => {
    if (open) {
      handleReset();
    }
  }, [open]);

  //************* BACK CLICK ********** */

  const handleBackClick = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  //************* INITIALIZATION ********** */

  const steps = [0, 1, 2, 3, 4, 5, 6];
  const propertyType = ["Commercial", "Residential", "Industrial", "Other"];
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

  //************* GET SERVICES ********** */

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

  //************* Service Flip ********** */

  const handleServiceBoxClick = (serviceIndex, event) => {
    console.log(serviceIndex);
    const isCheckbox =
      event.target.tagName === "INPUT" && event.target.type === "checkbox";

    setFlippedServices((prevFlipped) => {
      const newFlipped = [...prevFlipped];

      if (!isCheckbox) {
        // Toggle the state of the clicked service index
        const indexExists = newFlipped.indexOf(serviceIndex);
        if (indexExists !== -1) {
          newFlipped.splice(indexExists, 1);
        } else if (
          (serviceIndex === 2 && newFlipped.length === 0) ||
          (serviceIndex !== 2 && !newFlipped.includes(2))
        ) {
          newFlipped.push(serviceIndex);
        }
      }

      return newFlipped;
    });
  };

  //************* CHECKBOX ********** */

  const handleCheckboxChange = (
    event,
    subServiceData,
    serviceData,
    serviceIndex
  ) => {
    if (event.target.checked) {
      setSelectedSubServices((prevSelected) => {
        const selectedSubServicesCopy = { ...prevSelected };

        if (!selectedSubServicesCopy[serviceIndex]) {
          selectedSubServicesCopy[serviceIndex] = [];
        }
        selectedSubServicesCopy[serviceIndex].push(subServiceData.name);
        return selectedSubServicesCopy;
      });

      setServiceName((prevSelected) => [
        ...prevSelected,
        { [subServiceData.service_name]: subServiceData.name },
      ]);

      setWeightage((prevSelected) => [
        ...prevSelected,
        subServiceData.weightage * serviceData.rate,
      ]);
    } else {
      setSelectedSubServices((prevSelected) => {
        const selectedSubServicesCopy = { ...prevSelected };

        selectedSubServicesCopy[serviceIndex] = selectedSubServicesCopy[
          serviceIndex
        ].filter((selected) => selected !== subServiceData.name);

        return selectedSubServicesCopy;
      });

      setServiceName((prevSelected) =>
        prevSelected.filter(
          (selected) =>
            Object.keys(selected)[0] !== subServiceData.service_name ||
            selected[subServiceData.service_name] !== subServiceData.name
        )
      );

      setWeightage((prevSelected) =>
        prevSelected.filter(
          (_, index) => selectedSubServices[index] !== subServiceData.name
        )
      );
    }
  };

  //************* WEIGHTAGE ********** */

  useEffect(() => {
    const totalWeightage = weightage.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    setTotalWeightage(totalWeightage);
    setPropertyPrice(area * totalWeightage);
  }, [area, weightage]);

  //************* BUTTON CONDITIONS ********** */

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
          setStep1(true);
        } else {
          setActiveStep((prevStep) => prevStep + 1);
        }

        break;

      case 2:
        if (type) {
          setActiveStep((prevStep) => prevStep + 1);
        } else {
          setStep2(true);
        }
        break;

      case 3:
        if (color === 4 && (!length || !width)) {
          setLengthError(!length);
          setWidthError(!width);
          return;
        }

        const calculatedArea =
          color === 4 ? length * width : sizes[color]?.area;

        if (!calculatedArea) {
          setStep3(true);
          return;
        }

        setArea(calculatedArea);
        setPropertySize(sizes[color]?.size);

        setLengthError(false);
        setWidthError(false);

        setActiveStep((prevStep) => prevStep + 1);
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
        if (phone.trim() === "" || !/^(\+\d{12}|\d{11})$/.test(phone)) {
          setPhoneError(true);
        } else {
          setPhone(phone);
          setPhoneError(false);
          setActiveStep((prevStep) => prevStep + 1);
        }
        break;

      default:
        if (email.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          setEmailError(true);
        } else {
          setEmail(email);
          setEmailError(false);

          finish();
        }
        break;
    }
  };

  //************ Download PDF *********** */

  const handleClickFinalOpen = () => {
    setOpenFinal(true);
  };

  const handleClickFinalClose = () => {
    setOpenFinal(false);
  };

  //************* POST QUOTATION ********** */

  const finish = async () => {
    setLoader(true);

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
      // service_names: serviceName,
      total_property_price: propertyPrice,
      total_rate: totalWeightage,
    };

    try {
      await axios.post(`${baseUrl}/quotes/postQuotation`, postData);
      console.log("Data posted");
      handleClickClose();
      setLoader(false);

      handleClickFinalOpen();
      setLoading(true);
      axios
        .get(`${baseUrl}/quotes/getQuotes`)
        .then((response) => {
          const quote = response.data.data;
          if (quote.length > 0) {
            const lastQuote = quote[quote.length - 1];
            setQuote(lastQuote);
            setLoading(false);
            console.log(lastQuote);
          } else {
            console.log("No quotes available.");
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error("Get quotation Error:", error);
          setLoading(false);
        });
    } catch (error) {
      console.error("Post quotation Error:", error);
      setLoader(false);
    }
  };

  //************ MENU *********** */

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(!isMenuOpen);
    setMenuIconRotation((prevRotation) => !prevRotation);
  };

  const handleClose = () => {
    setMenuOpen(false);
    setMenuIconRotation(false);
  };

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
              onClose={handleClickClose}
              TransitionComponent={Transition}
            >
              <Snackbar
                open={step1 || step2 || step3}
                autoHideDuration={3000}
                TransitionComponent={Slide}
                onClose={() => {
                  setStep1(false);
                  setStep2(false);
                  setStep3(false);
                }}
                TransitionProps={{ direction: "left" }}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
              >
                <Alert severity={"error"}>
                  <Typography variant="body1">
                    {step1
                      ? "Please select a service!"
                      : step2
                      ? "Please select a proprty type!"
                      : "Please select property size!"}
                  </Typography>
                </Alert>
              </Snackbar>

              {loader ? (
                <Box gap={4} sx={styles.loader}>
                  <img src={loaderLogo} alt="loader" width={200} />
                  <CircularProgress sx={styles.loaderColor} />
                </Box>
              ) : (
                <Grid container sx={styles.quotePage}>
                  <Grid
                    item
                    gap={5}
                    container
                    sx={
                      activeStep === 1 || activeStep === 2
                        ? styles.containerView
                        : styles.container
                    }
                    md={activeStep === 1 || activeStep === 3 ? 10 : 6}
                  >
                    {activeStep === 0 ? (
                      <CloseIcon sx={styles.font} onClick={handleClickClose} />
                    ) : (
                      <Grid container sx={styles.justify}>
                        <KeyboardBackspaceIcon
                          sx={styles.font}
                          onClick={handleBackClick}
                        />
                        <CloseIcon
                          sx={styles.font}
                          onClick={handleClickClose}
                        />
                      </Grid>
                    )}

                    <Grid
                      container
                      sx={styles.info}
                      gap={
                        (activeStep === 3 && color === 4) || activeStep === 4
                          ? 3
                          : 5
                      }
                    >
                      <Box gap={1} sx={styles.wrap}>
                        {
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
                          <Typography variant="h2">
                            What is Your Name?
                          </Typography>

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
                              {showError
                                ? "Please enter name to continue!"
                                : ""}
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
                                onClick={(event) =>
                                  handleServiceBoxClick(serviceIndex, event)
                                }
                                sx={{
                                  ...styles.serviceBox,
                                  backgroundColor:
                                    flippedServices.includes(serviceIndex) &&
                                    "#ededed",
                                  transform: flippedServices.includes(
                                    serviceIndex
                                  )
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
                                            checked={selectedSubServices[
                                              serviceIndex
                                            ]?.includes(subServiceData.name)}
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
                                  <Typography variant="body1">
                                    {data}
                                  </Typography>
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
                                  Don't know the dimensions? Uncheck this to
                                  type area
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
                                    <Typography
                                      variant="body2"
                                      sx={styles.error}
                                    >
                                      {lengthError
                                        ? "Please Enter Length!"
                                        : ""}
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
                                    <Typography
                                      variant="body2"
                                      sx={styles.error}
                                    >
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
                          <Typography variant="h3">
                            Enter The Address!
                          </Typography>

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
                        </>
                      )}
                      {activeStep === 5 && (
                        <>
                          <Typography variant="h3">
                            What is Your Phone Number?
                          </Typography>

                          <Box sx={styles.block}>
                            <TextField
                              value={phone}
                              type="tel"
                              error={phoneError}
                              variant="outlined"
                              label="Enter phone number"
                              onChange={(e) => {
                                setPhone(e.target.value);
                                setPhoneError(false);
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {phoneError ? "Invalid phone number!" : ""}
                            </Typography>
                          </Box>
                        </>
                      )}
                      {activeStep === 6 && (
                        <>
                          <Typography variant="h3">
                            What is Your Email Address?
                          </Typography>

                          <Box sx={styles.block}>
                            <TextField
                              value={email}
                              type="email"
                              error={emailError}
                              variant="outlined"
                              label="Enter Email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError(false);
                              }}
                            />
                            <Typography variant="body2" sx={styles.error}>
                              {emailError ? "Invalid email address!" : ""}
                            </Typography>
                          </Box>
                        </>
                      )}

                      <Button
                        fullWidth
                        sx={{
                          ...styles.btn,
                          width:
                            activeStep === 1
                              ? "45%"
                              : activeStep === 3
                              ? "40%"
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
              )}
            </Dialog>

            <Dialog
              fullScreen
              open={openFinal}
              onClose={handleClickFinalClose}
              TransitionComponent={Transition}
            >
              {loading ? (
                <Box gap={4} sx={styles.loader}>
                  <img src={loaderLogo} alt="loader" width={200} />
                  <CircularProgress sx={styles.loaderColor} />
                </Box>
              ) : (
                <Grid container sx={styles.quotePage}>
                  <Grid item md={8} gap={6} container sx={styles.container}>
                    <CloseIcon
                      sx={styles.font}
                      onClick={handleClickFinalClose}
                    />

                    <Grid container gap={3} sx={styles.lastStep}>
                      <CheckCircleIcon sx={styles.icon} />

                      <Typography variant="h5">
                        The cost for your {quote.service_names} is{" "}
                        {quote.quotation_amount} PKR
                      </Typography>

                      <Box>
                        <Typography variant="body1">
                          Thank you for obtaining a quote from FINARCH. Thank
                          you for obtaining a quote from FINARCH.
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

                      <Button
                        fullWidth
                        variant="contained"
                        sx={styles.download}
                        onClick={() => window.open(quote.pdf_url, "_blank")}
                      >
                        Download PDF
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              )}
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
