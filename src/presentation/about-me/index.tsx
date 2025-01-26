import React from "react";
import { Container, Box, Typography } from "@mui/material";

const index = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100%",
        width: "100%",
        p: { xs: "2rem", sm: "6rem" },
        gap: "5rem",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: { xs: "350px", sm: "400px" },
          height: { xs: "350px", sm: "400px" },
          backgroundImage: "url('/images/about.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
        }}
      />

      <Box
        sx={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "normal" },
          gap: "2rem",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: "secondary.contrastText",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          Result-driven Data and Business Analyst with experience in large-scale
          business transformation projects, leveraging structured analysis
          methodologies. Skilled in documenting business processes, analyzing
          workflows, and collaborating with stakeholders to design and implement
          impactful solutions. Expertise in SQL, Python, Power BI, and data
          visualization tools. Experienced in retail and warehouse management
          systems, with a strong foundation in optimizing processes and systems
          to achieve business goals. Proven track record of designing,
          developing, and testing reporting applications while collaborating
          with stakeholders. Proficient in SQL, Python, Power BI, and modern
          analytics tools such as Looker and Alteryx. Experienced in financial
          and retail domains with a strong foundation in data science and
          machine learning.
        </Typography>
      </Box>
    </Container>
  );
};

export default index;
