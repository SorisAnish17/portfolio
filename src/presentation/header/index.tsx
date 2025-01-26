"use client";
import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function ButtonAppBar() {
  const data = ["About Me", "Skills", "Project", "Contact Me"];
  const [open, setOpen] = useState(false); // State to control drawer visibility

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ashlin Jaishal Jayakumar
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              gap: 2,
              display: { xs: "none", md: "flex" }, // Hide on mobile
            }}
          >
            {data.map((item, index) => (
              <Typography
                key={index}
                sx={{
                  padding: "0 15px",
                  display: "flex",
                  alignItems: "center",
                }}
                variant="h6"
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              color="inherit"
              endIcon={<DownloadTwoToneIcon fontSize="large" />}
              sx={{ display: { xs: "none", md: "flex" } }} // Hide on mobile
            >
              Resume
            </Button>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: { xs: "block", md: "none" }, // Show on mobile
              }}
              onClick={toggleDrawer} // Open the drawer on click
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{ width: 250 }}
      >
        <Box
          sx={{
            width: 250,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <List>
            {data.map((item, index) => (
              <ListItem key={index} component="li">
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
