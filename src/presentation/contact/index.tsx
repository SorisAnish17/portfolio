"use client";
import React from "react";
import { Container, Box, TextField, Typography, Button } from "@mui/material";

const Index = () => {
  return (
    <Box sx={{ bgcolor: "secondary.main", width: "100%" }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          padding: "4rem",
          gap: "7rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            flex: 1,
          }}
        >
          <TextField
            fullWidth
            placeholder="Your Name"
            sx={{ border: "2.4px solid black" }}
          />
          <TextField
            fullWidth
            placeholder="Email"
            sx={{ border: "2.4px solid black" }}
          />
          <TextField
            fullWidth
            placeholder="Your Website"
            sx={{ border: "2.4px solid black" }}
          />
          <TextField
            fullWidth
            placeholder="How Can I help U ?"
            multiline
            rows={5}
            sx={{ border: "2.4px solid black" }}
          />
          <Box>
            <Button variant="contained">Get in Touch</Button>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "normal" },
            gap: "3rem",
          }}
        >
          <Typography variant="h3">Let's Talk For</Typography>
          <Typography variant="h4">Something Special</Typography>
          <Typography variant="body1">
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </Typography>
          <Typography variant="h5">ashlinjaishal23@gmail.com</Typography>
          <Typography variant="h5">07587934672</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
