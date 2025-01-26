import { Container, Box, Typography } from "@mui/material";
import React from "react";
import WorkIcon from "@mui/icons-material/Work";
import { WorkExprienceData } from "./data/index";

const index = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", width: "100%" }}>
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
          sx={{ color: "primary.contrastText" }}
          align="center"
        >
          {WorkExprienceData.title}
        </Typography>
        <Box
          sx={{
            border: "1px solid #71717a",
            p: "1rem",
            borderRadius: "1rem",
            "&:hover": { bgcolor: "primary.light" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: { xs: "0.2rem", sm: "1rem" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <WorkIcon
                sx={{ fontSize: "30px", color: "primary.contrastText" }}
              />
              <Typography
                variant="h5"
                color="primary.contrastText"
                sx={{ fontSize: "1rem" }}
              >
                {WorkExprienceData.experience.company} -
                {WorkExprienceData.experience.location}
              </Typography>
              <Typography
                variant="h5"
                sx={{ color: "primary.contrastText", fontSize: "1rem" }}
              >
                {WorkExprienceData.experience.role}
              </Typography>
            </Box>
            <Typography
              variant="h6"
              sx={{ color: "primary.contrastText", fontSize: "1rem" }}
            >
              {WorkExprienceData.experience.date}
            </Typography>
          </Box>
          <Box sx={{ mt: "1rem" }}>
            {WorkExprienceData.experience.description.map((desc, index) => {
              return (
                <Typography
                  key={index}
                  variant="body1"
                  p={1}
                  sx={{
                    color: "primary.contrastText",
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                  }}
                >
                  {desc}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
