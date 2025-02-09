import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/videos">
          <ListItemIcon>
            <VideoLibraryIcon />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>

        <ListItem button component={Link} to="/logout">
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
