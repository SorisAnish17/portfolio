"use client";
import { Box, Container, Typography } from "@mui/material";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "./components/icons-section";
import { Data } from "./data/index";

const Hero = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: { xs: "70vh", sm: "100vh" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        mt: "1rem", // Adjust margin to suit your layout
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2rem",
          flex: "1",
        }}
      >
        <Typography variant="h2" sx={{ fontSize: { xs: "3rem" } }}>
          {Data.titleOne}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "3rem" } }}>
          {Data.titleTwo}
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: "3rem" } }}>
          {Data.titleThree}
        </Typography>

        <Typography variant="body1">{Data.subTitle}</Typography>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <IconButton IconComponent={FacebookTwoToneIcon} />
          <IconButton IconComponent={LinkedInIcon} />
          <IconButton IconComponent={GitHubIcon} />
        </Box>
      </Box>

      <Box
        sx={{
          flex: "1",
          display: { xs: "none", md: "block" },
          height: "70vh",
          width: "100%",
          backgroundImage: "url('/images/Banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </Container>
  );
};

export default Hero;
