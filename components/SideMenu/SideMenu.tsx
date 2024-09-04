import * as React from "react";
import { styled } from "@mui/material/styles";
import Drawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Profile from "./Profile";
import SiteLogo from "./SiteLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";

const drawerWidth = 240;

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, link: "/admin" },
  {
    text: "Request List",
    icon: <AssignmentRoundedIcon />,
    link: "/admin/request-list",
  },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function SideMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        boxSizing: "border-box",
        mt: 10,
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <SiteLogo />
      <Divider />
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
        <List dense>
          {mainListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <Link
                href={item.link}
                style={{ color: "inherit", textDecoration: "none" }}
                passHref
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        <List dense>
          {secondaryListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
      <Profile />
    </Drawer>
  );
}
