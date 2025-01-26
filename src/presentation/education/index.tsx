import React from "react";
import { Container, Typography, Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const index = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100%",
        width: "100%",
        p: { xs: "2rem", sm: "6rem" },
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "3rem",
      }}
    >
      <Typography
        variant="h3"
        mt={6}
        sx={{ color: "primary.main" }}
        align="center"
      >
        Education
      </Typography>
      <Box
        sx={{
          width: "100%",
          p: 3,
          border: "2px solid",
          borderColor: "primary.light",
          borderRadius: "8px", // Rounded corners for the box
          transition: "background-color 0.3s ease", // Smooth transition for the background color
          "&:hover": {
            backgroundColor: "secondary.main", // Change background color on hover
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SchoolIcon
            sx={{
              fontSize: "30px",
              color: "primary.main",
              alignSelf: "flex-start",
            }}
          />
          <Box>
            <Typography variant="h5" color="primary.main">
              University of Roehampton
            </Typography>
            <Typography variant="h6" color="primary.main">
              Master of Science: Data Science
            </Typography>
            <Typography variant="h6" color="primary.main">
              Graduation Date: Sep 2024
            </Typography>
            <Typography variant="h6" color="primary.main">
              London, Uk
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          p: 3,
          border: "2px solid",
          borderColor: "primary.light",
          borderRadius: "8px", // Rounded corners for the box
          transition: "background-color 0.3s ease", // Smooth transition for the background color
          "&:hover": {
            backgroundColor: "secondary.main", // Change background color on hover
          },
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <SchoolIcon
            sx={{
              fontSize: "30px",
              color: "primary.main",
              alignSelf: "flex-start",
            }}
          />
          <Box>
            <Typography variant="h5" color="primary.main">
              Bachelor of Engineering: Computer Science
            </Typography>
            <Typography variant="h6" color="primary.main">
              St.Xavier's Catholic College Of Engineering
            </Typography>
            <Typography variant="h6" color="primary.main">
              Graduation Date: Jul 2022
            </Typography>
            <Typography variant="h6" color="primary.main">
              Nagercoil, India
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default index;
