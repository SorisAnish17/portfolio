import { createTheme } from "@mui/material/styles";
import { typographyOptions } from "./typography";
import { paletteOptions } from "./palette";

const theme = createTheme({
  typography: typographyOptions,
  palette: paletteOptions,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          color: "black",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#27272a",
          color: "#ffffff",
          padding: "10px 20px",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#404040",
          },
          "&:disabled": {
            backgroundColor: "#888",
            color: "#ccc",
          },
        },
      },
    },
  },
});

export default theme;
