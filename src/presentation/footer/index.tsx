import React from "react";
import { Box, Typography, Container } from "@mui/material";

const index = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: "100%",
        height: "100%",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          p: "2rem",
          justifyContent: "space-between",
          gap: "3rem",
        }}
      >
        <Typography variant="h6" color="secondary.light">
          Ashlin Jaishal Jayakumar
        </Typography>
        <Box>
          <Typography color="secondary.light">2018-2025 present</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
