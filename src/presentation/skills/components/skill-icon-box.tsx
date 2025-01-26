import { Box, Typography } from "@mui/material";
import React from "react";

interface SkillIconBoxProps {
  title: string;
  IconSrc: string;
}

export const SkillIconBox = ({ title, IconSrc }: SkillIconBoxProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        border: "2px solid black",
        ":hover": {
          backgroundColor: "black",
          color: "white",
        },
        cursor: "pointer",
        gap: "0.5rem",
        textAlign: "center",
        flex: "1 1 200px", // Allow boxes to grow and shrink but set a min width
        maxWidth: "200px", // Set a max width for each box
      }}
    >
      <img src={IconSrc} alt={title} width={30} height={30} />
      <Typography variant="body1">{title}</Typography>
    </Box>
  );
};
