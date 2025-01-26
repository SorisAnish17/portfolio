import { Box, Container, Typography } from "@mui/material";
import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const index = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", width: "100%", pb: "2rem" }}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "3rem",
          p: { xs: "1rem", sm: "4rem", lg: "6rem" },
        }}
      >
        <Typography variant="h3" color="primary.contrastText">
          My Projects
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "5rem",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: "1",
                borderRadius: "1rem",
                backgroundImage: "url('/images/projectOne.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { xs: "350px", sm: "400px" },
                height: { xs: "350px", sm: "400px" },
                display: "block", // Ensure it's treated as a block-level element
              }}
            />
            <Box sx={{ flex: "1", alignSelf: "center" }}>
              <Typography variant="h3" color="primary.contrastText" p={2}>
                01
              </Typography>
              <Typography variant="h5" color="primary.contrastText" p={2}>
                Business Process Optimization with Data Analysis
              </Typography>
              <Typography color="secondary.contrastText" p={2} variant="body2">
                Led collaborative efforts to document business processes and
                workflows for a retail environment, identifying inefficiencies
                that could reduce operational costs by 15% and proposing
                software solutions to address them. • Developed detailed
                specifications and test plans, ensuring 95% alignment with
                stakeholder needs during product development and rollout. •
                Conducted stakeholder interviews with over 10 key participants
                to gather insights, resulting in innovative solutions that
                addressed 80% of identified market demands.
                <OpenInNewIcon
                  sx={{
                    color: "primary.contrastText",
                    display: "block",
                    mt: "1rem",
                  }}
                />
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "5rem",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ flex: "1", alignSelf: "center" }}>
              <Typography variant="h3" color="primary.contrastText" p={2}>
                02
              </Typography>
              <Typography variant="h5" color="primary.contrastText" p={2}>
                Predicting Stock Prices with LSTM
              </Typography>
              <Typography color="secondary.contrastText" p={2} variant="body2">
                Designed and developed a deep learning model for stock price
                prediction, achieving over 80% accuracy in forecasting trends. •
                Conducted hyperparameter tuning to optimize model performance by
                10%, improving alignment with real-world market trends and
                increasing predictive reliability.
                <OpenInNewIcon
                  sx={{
                    color: "primary.contrastText",
                    display: "block",
                    mt: "1rem",
                  }}
                />
              </Typography>
            </Box>
            <Box
              sx={{
                flex: "1",
                borderRadius: "1rem",
                backgroundImage: "url('/images/projectTwo.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { xs: "350px", sm: "400px" },
                height: { xs: "350px", sm: "400px" },
                display: "block", // Ensure it's treated as a block-level element
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default index;
