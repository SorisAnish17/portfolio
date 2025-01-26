import { Typography, Container, Box } from "@mui/material";
import React from "react";
import { SkillIconBox } from "../skills/components/skill-icon-box";

const index = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        p: { xs: "1rem", sm: "6rem" },
        display: "flex",
        flexDirection: "column",
        height: "100%",
        mb: "2rem",
      }}
    >
      <Typography variant="h3" m={5} textAlign={"center"}>
        My Skills
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          mt: "2rem",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <SkillIconBox IconSrc="/images/sql.png" title="SQL" />
          <SkillIconBox IconSrc="/images/python.png" title="Python" />
          <SkillIconBox IconSrc="/images/powerbi.png" title="Power Bi" />
          <SkillIconBox
            IconSrc="/images/data-visualization.png"
            title="Data Visualization"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <SkillIconBox
            IconSrc="/images/machine.png"
            title="Machine Learning"
          />
          <SkillIconBox IconSrc="/images/qa.png" title="Quality Analysis" />
          <SkillIconBox IconSrc="/images/locker.png" title="Locker" />
          <SkillIconBox
            IconSrc="/images/warehouse.png"
            title="Data Warehouse Management"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default index;
