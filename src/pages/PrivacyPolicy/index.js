import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const PrivacyPolicy = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid>
      <Navbar />
      <Grid
        gap={2}
        container
        sx={isMatch ? styles.privacyView : styles.privacy}
      >
        <Typography variant="h4" sx={styles.heading}>
          Privacy Policy
        </Typography>

        <Grid
          gap={2}
          container
          sx={isMatch ? styles.descriptionView : styles.description}
        >
          <Typography variant="h5">Privacy Policy for Finarch</Typography>
          <Typography variant="body1">
            At finarch.co, accessible from{" "}
            <Link to="https://www.finarch.co/" target="_blank">
              https://www.finarch.co/
            </Link>
            , one of our main priorities is the privacy of our visitors. This
            Privacy Policy document contains types of information that is
            collected and recorded by finarch.co and how we use it.
          </Typography>
          <Typography variant="body1">
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </Typography>
          <Typography variant="body1">
            This Privacy Policyapplies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in finarch.co. This policy is not
            applicable to any information collected offline or via channels
            other than this website.
          </Typography>

          <Typography variant="h5">Consent</Typography>
          <Typography variant="body1">
            By using our website, you hereby consent to out Privacy Policy and
            agree to its terms.
          </Typography>

          <Typography variant="h5">Information we collect</Typography>
          <Typography variant="body1">
            The personal information that you are asked to provide and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </Typography>
          <Typography variant="body1">
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us and any
            other information you may choose to provide.
          </Typography>
          <Typography variant="body1">
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address and telephone number.
          </Typography>

          <Typography variant="h5">How we use your information</Typography>
          <Box gap={1}>
            <Typography variant="body1">
              We use the information we collect in various ways, including to:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Provide, operate, and maintain our website
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Improve, personalize, and expand our website
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Understand and analyze how you use our website
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Improve, personalize, and expand our websiteDevelop new
                  products, services, features, and functionality
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you with
                  updates and other information relating to the website, and for
                  marketing and promotional purposes
                </Typography>
              </li>
              <li>
                <Typography variant="body1">Send you emails</Typography>
              </li>
              <li>
                <Typography variant="body1">Find and prevent fraud</Typography>
              </li>
            </ul>
          </Box>

          <Typography variant="h5">Log Files</Typography>
          <Typography variant="body1">
            finarch.co follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Typography>

          <Typography variant="h5">
            Advertising Partners Privacy Policies
          </Typography>
          <Typography variant="body1">
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of finarch.co.
          </Typography>
          <Typography variant="body1">
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on finarch.co, which
            are sent directly to users' browser. They automatically receive your
            IP address when this occurs. These technologies are used to measure
            the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on websites that
            you visit.
          </Typography>
          <Typography variant="body1">
            Note that finarch.co has no access to or control over these cookies
            that are used by third-party advertisers.
          </Typography>

          <Typography variant="h5">Third Party Privacy Policies</Typography>
          <Typography variant="body1">
            finarch.co's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third- party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.
          </Typography>
          <Typography variant="body1">
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web browsers, it can be found at the browsers'
            respective websites.
          </Typography>

          <Typography variant="h5">
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Typography>
          <Typography variant="body1">
            Under the CCPA, among other rights, California consumers have the
            right to:
          </Typography>
          <Typography variant="body1">
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Typography>
          <Typography variant="body1">
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </Typography>
          <Typography variant="body1">
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </Typography>
          <Typography variant="body1">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Typography>

          <Typography variant="h5">GDPR Data Protection Rights</Typography>
          <Typography variant="body1">
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </Typography>
          <Typography variant="body1">
            The right to access - You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </Typography>
          <Typography variant="body1">
            The right to rectification - You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </Typography>
          <Typography variant="body1">
            The right to erasure - You have the right to request that we erase
            your personal data, under certain conditions.
          </Typography>
          <Typography variant="body1">
            The right to restrict processing - You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </Typography>
          <Typography variant="body1">
            The right to object to processing - You have the right to object to
            our processing of your personal data, under certain conditions.
          </Typography>
          <Typography variant="body1">
            The right to data portability - You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </Typography>
          <Typography variant="body1">
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Typography>

          <Typography variant="h5">Children's Information</Typography>
          <Typography variant="body1">
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/ or monitor and guide their online activity.
          </Typography>
          <Typography variant="body1">
            finarch.co does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Typography>

          <Typography variant="h5">Changes to This Privacy Policy</Typography>
          <Typography variant="body1">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </Typography>

          <Typography variant="h5">Contact Us</Typography>
          <Typography variant="body1">
            If you have any questions or suggestions about our Privacy Policy,
            do not hesitate to contact us.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PrivacyPolicy;
