import {
  Box,
  List,
  Drawer,
  Toolbar,
  Divider,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

import styles from "./styles";
import InfoIcon from "@mui/icons-material/Info";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import CallIcon from "@mui/icons-material/Call";
import GroupsIcon from "@mui/icons-material/Groups";
import ListAltIcon from "@mui/icons-material/ListAlt";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const drawerWidth = 200;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function DrawerComp() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (index) => {
    if (index === 0) {
      navigate("/about");
      setOpen(false);
    } else if (index === 1) {
      navigate("/team");
      setOpen(false);
    } else if (index === 2) {
      navigate("/projects");
      setOpen(false);
    } else if (index === 3) {
      navigate("/news");
      setOpen(false);
    } else if (index === 4) {
      window.open(
        "https://admin.finarch.co/careers/cdd166ca8c65ee9feb9e896fdd05e1ab",
        "_blank"
      );
      setOpen(false);
    } else if (index === 5) {
      navigate("/contact");
      setOpen(false);
    } else if (index === 6) {
      navigate("/terms-and-conditions");
      setOpen(false);
    } else {
      navigate("/privacy-policy");
      setOpen(false);
    }
  };

  return (
    <Box>
      <Toolbar sx={styles.drawerToolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} sx={styles.iconButton}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider color="black" />

        <List sx={styles.list}>
          <div style={{ flexGrow: 1 }}>
            {[
              "About",
              "Team",
              "Projects",
              "News",
              "Careers",
              "Contact",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemIcon>
                    {index === 0 ? (
                      <InfoIcon />
                    ) : index === 1 ? (
                      <GroupsIcon />
                    ) : index === 2 ? (
                      <AssignmentIcon />
                    ) : index === 3 ? (
                      <NewspaperIcon />
                    ) : index === 4 ? (
                      <WorkIcon />
                    ) : index === 5 ? (
                      <CallIcon />
                    ) : index === 6 ? (
                      <ListAltIcon />
                    ) : (
                      <VerifiedUserIcon />
                    )}
                  </ListItemIcon>

                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </div>
        </List>
      </Drawer>
    </Box>
  );
}
