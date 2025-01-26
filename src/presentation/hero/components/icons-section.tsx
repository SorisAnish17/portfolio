import React from "react";
import { Box } from "@mui/material";

import { SvgIconProps } from "@mui/material";

interface IconButtonProps {
  IconComponent: React.ComponentType<SvgIconProps>;
}

export const IconButton = ({ IconComponent }: IconButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        border: "1px solid black",
        ":hover": {
          backgroundColor: "black",
          color: "white",
        },
        cursor: "pointer",
      }}
    >
      <IconComponent fontSize="large" />
    </Box>
  );
};
