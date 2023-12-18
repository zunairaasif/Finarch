import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import styles from "./styles";
import Navbar from "../../components/Navbar";

const TermsConditions = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid>
      <Navbar />
      <Grid
        gap={2}
        container
        sx={isMatch ? styles.termsConditionsView : styles.termsConditions}
      >
        <Typography variant="h4" sx={styles.heading}>
          Terms & Conditions
        </Typography>

        <Grid
          gap={2}
          container
          sx={isMatch ? styles.descriptionView : styles.description}
        >
          <Typography variant="h5">Introduction</Typography>
          <Typography variant="body1">
            These Website Standard Terms and Conditions written on this webpage
            shall manage your use of our website, finarch.co accessible at{" "}
            <Link to="https://www.finarch.co/" target="_blank">
              https://www.finarch.co/
            </Link>
          </Typography>
          <Typography variant="body1">
            These Terms will be applied fully and affect to your use of this
            Website. By using this Website, you agreed to accept all terms and
            conditions written in here. You must not use this Website if you
            disagree with any of these Website Standard Terms and Conditions.
          </Typography>

          <Typography variant="h5">Intellectual Property Rights</Typography>
          <Typography variant="body1">
            Other than the content you own, under these Terms, Finarch and/or
            its licensors own all the intellectual property rights and materials
            contained in this Website.
          </Typography>
          <Typography variant="body1">
            You are granted limited license only for purposes of viewing the
            material contained on this Website.
          </Typography>

          <Typography variant="h5">Restrictions</Typography>
          <Box gap={1}>
            <Typography variant="body1">
              You are specifically restricted from all of the following:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  publishing any Website material in any other media;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  selling, sublicensing and/or otherwise commercializing any
                  Website material;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  publicly performing and/or showing any Website material;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  using this Website in any way that is or may be damaging to
                  this Website;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  using this Website in any way that impacts user access to this
                  Website;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  using this Website contrary to applicable laws and
                  regulations, or in any way may cause harm to the Website, or
                  to any person or business entity;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website;
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  using this Website to engage in any advertising or marketing.
                </Typography>
              </li>
            </ul>
          </Box>
          <Typography variant="body1">
            Certain areas of this Website are restricted from being access by
            you and Finarch may further restrict access by you to any areas of
            this Website, at any time, in absolute discretion. Any user ID and
            password you may have for this Website are confidential and you must
            maintain confidentiality as well.
          </Typography>

          <Typography variant="h5">Your Content</Typography>

          <Typography variant="body1">
            In these Website Standard Terms and Conditions, "Your Content" shall
            mean any audio, video text, images or other material you choose to
            display on this Website. By displaying Your Content, you grant
            Finarch a non-exclusive, worldwide irrevocable, sub licensable
            license to use, reproduce, adapt, publish, translate and distribute
            it in any and all media.
          </Typography>
          <Typography variant="body1">
            Your Content must be your own and must not be invading any
            third-party's rights. Finarch reserves the right to remove any of
            Your Content from this Website at any time without notice.
          </Typography>

          <Typography variant="h5">No warranties</Typography>
          <Typography variant="body1">
            This Website is provided "as is," with all faults, and Finarch
            express no representations or warranties, of any kind related to
            this Website or the materials contained on this Website. Also,
            nothing contained on this Website shall be interpreted as advising
            you.
          </Typography>

          <Typography variant="h4">Return and Refund Policy</Typography>
          <Typography variant="body1">
            Last updated: September 25, 2023
          </Typography>
          <Typography variant="body1">
            Thank you for shopping at Finarch website and Finarch app.
          </Typography>
          <Typography variant="body1">
            If, for any reason, You are not completely satisfied with a purchase
            We invite you to review our policy on refunds and returns.
          </Typography>
          <Typography variant="body1">
            The following terms are applicable for any products that you
            purchased with Us.
          </Typography>

          <Typography variant="h5">Interpretation and Definitions</Typography>
          <Typography variant="h6">Interpretation</Typography>
          <Typography variant="body1">
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Typography>

          <Typography variant="h6">Definitions</Typography>
          <Box gap={1}>
            <Typography variant="body1">
              For the purposes of this Return and Refund Policy:
            </Typography>
            <ul>
              <li style={styles.gap}>
                <Typography variant="body1">
                  <b>Application</b> means the software program provided by the
                  Company downloaded by You on any electronic device, named
                  Finarch
                </Typography>
              </li>
              <li style={styles.gap}>
                <Typography variant="body1">
                  <b>Company</b> (referred to as either "the Company", "We",
                  "Us" or "Our" in this Agreement) refers to Finarch, E-86/11
                  T.S Building Defence, D.H.A. Main Blvd, Punjab.
                </Typography>
              </li>
              <li style={styles.gap}>
                <Typography variant="body1">
                  <b>Goods</b> refer to the items offered for sale on the
                  Service.
                </Typography>
              </li>
              <li style={styles.gap}>
                <Typography variant="body1">
                  <b>Orders</b> mean a request by You to purchase Goods from Us.
                </Typography>
              </li>
              <li style={styles.gap}>
                <Typography variant="body1">
                  <b>Service</b> refers to the Application or the Website or
                  both.
                </Typography>
              </li>
              <li style={styles.gap}>
                <Typography variant="body1">
                  <b>Website</b> refers to Finarch, accessible from{" "}
                  <Link to="https://www.finarch.co/" target="_blank">
                    https://www.finarch.co/
                  </Link>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <b>You</b> means the individual accessing or using the
                  Service, or the company, or other legal entity on behalf of
                  which such individual is accessing or using the Service, as
                  applicable.
                </Typography>
              </li>
            </ul>
          </Box>

          <Typography variant="h5">Your Order Cancellation Rights</Typography>
          <Box gap={1}>
            <Typography variant="body1">
              In order to exercise Your right of cancellation, You must inform
              Us of your decision by means of a clear statement. You can inform
              us of your decision by:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  By phone number: +923009454797
                </Typography>
              </li>
            </ul>
            <Typography variant="body1">
              Our Team will Analyise Your Dispute and If deemed Fit We will
              reimburse you no later than 14 days from the day on which We
              receive the returned Goods. We will use the same means of payment
              as You used for the Order, and You will not incur any fees for
              such reimbursement.
            </Typography>
          </Box>

          <Typography variant="h5">Conditions for Returns</Typography>
          <Box gap={1}>
            <Typography variant="body1">
              In order for the Goods to be eligible for a return, please make
              sure that:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  The Goods were purchased in the last 7 days
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  The Goods are in the original packaging
                </Typography>
              </li>
            </ul>
            <Typography variant="body1">
              The following Goods cannot be returned:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  The supply of Goods made to Your specifications or clearly
                  personalized.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  The supply of Goods which according to their nature are not
                  suitable to be returned, deteriorate rapidly or where the date
                  of expiry is over.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  The supply of Goods which are not suitable for return due to
                  health protection or hygiene reasons and were unsealed after
                  delivery.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  The supply of Goods which are, after delivery, according to
                  their nature, inseparably mixed with other items.
                </Typography>
              </li>
              <li>
                <Typography>
                  All Digital Items and Products. Like Softwares, Blueprints
                  etc.
                </Typography>
              </li>
            </ul>
            <Typography variant="body1">
              We reserve the right to refuse returns of any merchandise that
              does not meet the above return conditions in our sole discretion.
            </Typography>
          </Box>
          <Typography variant="body1">
            Only regular priced Goods may be refunded. Unfortunately, Goods on
            sale cannot be refunded. This exclusion may not apply to You if it
            is not permitted by applicable law.
          </Typography>

          <Typography variant="h5">Returning Goods</Typography>
          <Typography variant="body1">
            You are responsible for the cost and risk of returning the Goods to
            Us. You should send the Goods at the following address:
          </Typography>
          <Typography variant="body1">
            E-86/11 T.S Building Defence, D.H.A. Main Blvd, Punjab
          </Typography>
          <Typography variant="body1">
            We cannot be held responsible for Goods damaged or lost in return
            shipment. Therefore, We recommend an insured and trackable mail
            service. We are unable to issue a refund without actual receipt of
            the Goods or proof of received return delivery.
          </Typography>

          <Typography variant="h5">Changes to This Privacy Policy</Typography>
          <Typography variant="body1">
            We may update our Privacy Policy from time to time. Thus, we advise
            you to review this page periodically for any changes. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            These changes are effective immediately, after they are posted on
            this page.
          </Typography>

          <Typography variant="h5">Gifts</Typography>
          <Typography variant="body1">
            If the Goods were marked as a gift when purchased and then shipped
            directly to you, You'll receive a gift credit for the value of your
            return. Once the returned product is received, a gift certificate
            will be mailed to You.
          </Typography>
          <Typography variant="body1">
            If the Goods weren't marked as a gift when purchased, or the gift
            giver had the Order shipped to themselves to give it to You later,
            We will send the refund to the gift giver.
          </Typography>

          <Typography variant="h6">Contact Us</Typography>
          <Box gap={1}>
            <Typography variant="body1">
              If you have any questions about our Returns and Refunds Policy,
              please contact us:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  By phone number: +923009454797
                </Typography>
              </li>
            </ul>
          </Box>

          <Typography variant="h5">Limitation of liability</Typography>
          <Typography variant="body1">
            In no event shall Finarch, nor any of its officers, directors and
            employees, shall be held liable for anything arising out of or in
            any way connected with your use of this Website whether such
            liability is under contract. Finarch, including its officers,
            directors and employees shall not be held liable for any indirect,
            consequential or special liability arising out of or in any way
            related to your use of this Website.
          </Typography>

          <Typography variant="h5">Indemnification</Typography>
          <Typography variant="body1">
            You hereby indemnify to the fullest extent Finarch from and against
            any and/or all liabilities, costs, demands, causes of action,
            damages and expenses arising in any way related to your breach of
            any of the provisions of these Terms.
          </Typography>

          <Typography variant="h5">Severability</Typography>
          <Typography variant="body1">
            If any provision of these Terms is found to be invalid under any
            applicable law, such provisions shall be deleted without affecting
            the remaining provisions herein.
          </Typography>

          <Typography variant="h5">Variation of Terms</Typography>
          <Typography variant="body1">
            Finarch is permitted to revise these Terms at any time as it sees
            fit, and by using this Website you are expected to review these
            Terms on a regular basis.
          </Typography>

          <Typography variant="h5">Assignment</Typography>
          <Typography variant="body1">
            The Finarch is allowed to assign, transfer, and subcontract its
            rights and/or obligations under these Terms without any
            notification. However, you are not allowed to assign, transfer, or
            subcontract any of your rights and/or obligations under these Terms.
          </Typography>

          <Typography variant="h5">Entire Agreement</Typography>
          <Typography variant="body1">
            These Terms constitute the entire agreement between Finarch and you
            in relation to your use of this Website, and supersede all prior
            agreements and understandings.
          </Typography>

          <Typography variant="h5">Governing Law & Jurisdiction</Typography>
          <Typography variant="body1">
            These Terms will be governed by and interpreted in accordance with
            the laws of the State of pk, and you submit to the non-exclusive
            jurisdiction of the state and federal courts located in pk for the
            resolution of any disputes.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TermsConditions;
