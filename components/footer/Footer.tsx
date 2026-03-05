"use client";

import { smallMutedText, subHeadingStyle } from "@/styles/headingStyle";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        minHeight: "90vh",
        backgroundColor: "black",
        color: "white",
        paddingX: { xs: 4, md: 8 },
        paddingY: { xs: 10, md: 12 },
      }}
    >
      <Grid container rowSpacing={4}>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={2}>
            <img
              src="/assets/images/logos/proserp-white.png"
              alt="ProsERP logo"
              width={150}
            />
            <Typography
              style={{ ...subHeadingStyle, color: "white", fontSize: 18 }}
            >
              Real Operational Control Starts Here
            </Typography>
            <Link
              href="tel:0655370832"
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.679688 4.75694C0.679688 12.2627 6.76476 18.3478 14.2705 18.3478H16.3092C17.4354 18.3478 18.3478 17.4354 18.3478 16.3092V15.0661C18.3478 14.5985 18.0298 14.1908 17.5758 14.0775L13.5683 13.0755C13.1697 12.9758 12.7511 13.1253 12.5055 13.4533L11.6267 14.6248C11.3712 14.9655 10.9299 15.1159 10.5303 14.9691C7.53401 13.8719 5.15561 11.4935 4.05837 8.49715C3.91159 8.09757 4.062 7.65633 4.40268 7.40082L5.57421 6.52194C5.90311 6.2764 6.0517 5.8569 5.95203 5.45914L4.94993 1.45165C4.83668 0.997713 4.42895 0.679688 3.96143 0.679688H2.71832C1.59209 0.679688 0.679688 1.59209 0.679688 2.71832V4.75694Z"
                  stroke="white"
                  strokeWidth="1.35909"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Typography style={{ ...smallMutedText, color: "white" }}>
                065 537 0832
              </Typography>
            </Link>
            <Link
              href="mailto:info@prosafrica.com"
              style={{ display: "flex", alignItems: "center", gap: 4 }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.9117 8.83442C12.9117 11.086 11.086 12.9117 8.83442 12.9117C6.58287 12.9117 4.75717 11.086 4.75717 8.83442C4.75717 6.58287 6.58287 4.75717 8.83442 4.75717C11.086 4.75717 12.9117 6.58287 12.9117 8.83442ZM12.9117 8.83442C12.9117 10.3358 13.8241 11.5526 14.9503 11.5526C16.0765 11.5526 16.9889 10.3358 16.9889 8.83442C16.9889 6.74778 16.1925 4.66022 14.6006 3.06828C11.4158 -0.11651 6.25307 -0.11651 3.06828 3.06828C-0.11651 6.25307 -0.11651 11.4158 3.06828 14.6006C6.25307 17.7854 11.4158 17.7854 14.6006 14.6006M12.9117 8.83442V5.43671"
                  stroke="white"
                  strokeWidth="1.35909"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Typography style={{ ...smallMutedText, color: "white" }}>
                info@prosafrica.com
              </Typography>
            </Link>
          </Stack>
        </Grid>
        <Grid container size={{ xs: 12, md: 5 }} spacing={4}>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              pb: 2,
              borderBottomWidth: { xs: 1, md: 0 },
              borderBottomColor: "gray",
            }}
          >
            <Stack>
              <Typography style={{ ...subHeadingStyle, fontSize: 18 }}>
                Controlled expense tracking
              </Typography>
              <Typography style={{ ...subHeadingStyle, fontSize: 18 }}>
                Budget planning and monitoring
              </Typography>
              <Typography style={{ ...subHeadingStyle, fontSize: 18 }}>
                Operational and financial reporting
              </Typography>
              <Typography style={{ ...subHeadingStyle, fontSize: 18 }}>
                Structured approval workflows
              </Typography>
              <Typography style={{ ...subHeadingStyle, fontSize: 18 }}>
                Supplier and user access management
              </Typography>
              <Typography style={{ ...subHeadingStyle, fontSize: 18 }}>
                User access & roles
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              pb: 2,
              borderBottomWidth: { xs: 1, md: 0 },
              borderBottomColor: "gray",
            }}
          >
            <Stack>
              <Link href="#" style={{ ...subHeadingStyle, fontSize: 16 }}>
                Case Studies
              </Link>
              <Link href="#" style={{ ...subHeadingStyle, fontSize: 16 }}>
                About Us
              </Link>
              <Link href="#" style={{ ...subHeadingStyle, fontSize: 16 }}>
                Blog
              </Link>
              <Link href="#" style={{ ...subHeadingStyle, fontSize: 16 }}>
                Careers
              </Link>
              <Link href="#" style={{ ...subHeadingStyle, fontSize: 16 }}>
                Contact
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      <Stack
        mt={{ xs: 10, md: 20 }}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap={{ xs: 4, md: 0 }}
        alignItems="center"
        justifyContent="space-between"
        sx={{ borderBottomWidth: 2, borderBottomColor: "gray", py: 8 }}
      >
        {/* social medias */}
        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
        >
          <Link href="#">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.15465 10.112H8.35291L9.23222 6.59479H6.15465V4.83618C6.15465 3.93041 6.15465 3.07757 7.91326 3.07757H9.23222V0.123143C8.94522 0.085488 7.86237 0 6.71948 0C4.33294 0 2.63743 1.45737 2.63743 4.13294V6.59479H-0.000488281V10.112H2.63743V17.5851H6.15465V10.112Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1942 -0.000976562H18.153L11.6901 7.38651L19.293 17.4386H13.3387L8.67565 11.3414L3.34018 17.4386H0.380354L7.29292 9.5373L0 -0.000976562H6.10353L10.3189 5.57195L15.1921 -0.000976562H15.1942ZM14.1561 15.6671H15.7952L5.21358 1.67699H3.45471L14.1561 15.6671Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.72031 6.10422C7.27548 6.10422 6.10422 7.27548 6.10422 8.72031C6.10422 10.1651 7.27548 11.3353 8.72031 11.3353C10.1651 11.3353 11.3353 10.1651 11.3353 8.72031C11.3353 7.27548 10.1651 6.10422 8.72031 6.10422ZM8.72031 4.36016C11.128 4.36016 13.0794 6.31154 13.0794 8.72031C13.0794 11.128 11.128 13.0794 8.72031 13.0794C6.31154 13.0794 4.36016 11.128 4.36016 8.72031C4.36016 6.31154 6.31154 4.36016 8.72031 4.36016ZM14.3874 4.14215C14.3874 4.74381 13.9001 5.23219 13.2974 5.23219C12.6957 5.23219 12.2074 4.74381 12.2074 4.14215C12.2074 3.54049 12.6957 3.05211 13.2974 3.05211C13.9001 3.05211 14.3874 3.54049 14.3874 4.14215ZM8.72031 1.74406C6.56268 1.74406 6.21002 1.75047 5.20654 1.79429C4.52259 1.82635 4.06414 1.91825 3.63881 2.0839C3.28294 2.21428 2.96127 2.4248 2.69731 2.69731C2.42373 2.96127 2.21428 3.28294 2.08283 3.63881C1.91719 4.06627 1.82635 4.52366 1.79429 5.20654C1.74941 6.16941 1.74299 6.50604 1.74299 8.72031C1.74299 10.8779 1.74941 11.2295 1.79322 12.233C1.82635 12.9159 1.91719 13.3754 2.08283 13.7997C2.23031 14.1791 2.4045 14.4526 2.69411 14.7422C2.98799 15.0351 3.26157 15.2103 3.63667 15.3546C4.06734 15.5213 4.5258 15.6143 5.20547 15.6453C6.16834 15.6901 6.50497 15.6955 8.71924 15.6955C10.8769 15.6955 11.2285 15.6901 12.2319 15.6453C12.9138 15.6132 13.3733 15.5213 13.7997 15.3567C14.1555 15.2253 14.4772 15.0158 14.7412 14.7433C15.0351 14.4505 15.2103 14.178 15.3546 13.8018C15.5202 13.3733 15.6132 12.9138 15.6442 12.2319C15.6901 11.2701 15.6944 10.9335 15.6944 8.72031C15.6944 6.56268 15.6891 6.21002 15.6442 5.20654C15.6121 4.52473 15.5192 4.06414 15.3546 3.63881C15.2231 3.28294 15.0137 2.96127 14.7422 2.69731C14.4783 2.42373 14.1566 2.21428 13.7997 2.08283C13.3733 1.91719 12.9138 1.82635 12.2319 1.79429C11.2701 1.74941 10.9346 1.74406 8.72031 1.74406ZM8.72031 0C11.0895 0 11.3845 0.00854932 12.3153 0.0523646C13.2429 0.0961799 13.8756 0.241518 14.4313 0.457389C15.0073 0.679671 15.4914 0.978898 15.9766 1.463C16.42 1.89902 16.7631 2.42587 16.9822 3.00829C17.197 3.564 17.3434 4.19665 17.3872 5.12532C17.4289 6.05506 17.4396 6.35108 17.4396 8.72031C17.4396 11.0895 17.431 11.3845 17.3872 12.3142C17.3434 13.2429 17.197 13.8756 16.9822 14.4313C16.7642 15.0137 16.42 15.5416 15.9766 15.9766C15.5405 16.42 15.0137 16.7631 14.4313 16.9822C13.8756 17.197 13.2429 17.3434 12.3153 17.3872C11.3845 17.4289 11.0895 17.4396 8.72031 17.4396C6.35108 17.4396 6.05506 17.431 5.12425 17.3872C4.19665 17.3434 3.56507 17.197 3.00829 16.9822C2.42587 16.7631 1.89902 16.42 1.463 15.9766C1.01951 15.5405 0.676465 15.0137 0.457389 14.4313C0.241518 13.8756 0.0961799 13.2429 0.0523646 12.3142C0.0106867 11.3845 0 11.0895 0 8.72031C0 6.35108 0.00854932 6.05506 0.0523646 5.12532C0.0961799 4.19558 0.241518 3.56507 0.457389 3.00829C0.676465 2.42587 1.01951 1.89902 1.463 1.463C1.89902 1.01951 2.42587 0.676465 3.00829 0.457389C3.564 0.241518 4.19558 0.0961799 5.12425 0.0523646C6.05506 0.0117553 6.35108 0 8.72031 0Z"
                fill="white"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64738 1.8242C3.64636 2.83209 2.83005 3.64737 1.82318 3.64737C0.815284 3.64636 0 2.83005 0 1.82318C0 0.815284 0.817322 0 1.8242 0C2.83209 0 3.64738 0.817322 3.64738 1.8242ZM3.70241 4.99769H0.0550316V16.4137H3.70241V4.99769ZM9.46442 4.99769H5.83539V16.4137H9.42876V10.4234C9.42876 7.08583 13.7773 6.77603 13.7773 10.4234V16.4137H17.3798V9.18315C17.3798 3.55667 10.9421 3.76661 9.42876 6.5294L9.46442 4.99769Z"
                fill="white"
              />
            </svg>
          </Link>
        </Box>

        <Typography display="flex" alignItems="center" gap={2}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.1056 9.86896C14.1056 11.4271 12.8427 12.6901 11.2845 12.6901C9.72629 12.6901 8.46338 11.4271 8.46338 9.86896C8.46338 8.31077 9.72629 7.04785 11.2845 7.04785C12.8427 7.04785 14.1056 8.31077 14.1056 9.86896Z"
              stroke="white"
              strokeWidth="1.41055"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18.3375 9.86917C18.3375 16.5853 11.2847 20.4483 11.2847 20.4483C11.2847 20.4483 4.23193 16.5853 4.23193 9.86917C4.23193 5.97416 7.38969 2.81641 11.2847 2.81641C15.1797 2.81641 18.3375 5.97416 18.3375 9.86917Z"
              stroke="white"
              strokeWidth="1.41055"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Dar es salaam, Tanzania
        </Typography>
      </Stack>

      <Stack
        mt={4}
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography style={smallMutedText}>
          @ {new Date().getFullYear()} ProsERP. All rights reserved.
        </Typography>

        <Box
          component="div"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap={2}
        >
          <Link href="#" style={smallMutedText}>
            Terms
          </Link>
          <Link href="#" style={smallMutedText}>
            Privacy
          </Link>
          <Link href="#" style={smallMutedText}>
            Cookies
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
