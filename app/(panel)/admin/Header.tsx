"use client";

import {
  AppBar,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import NavbarBreadcrumbs from "./NavbarBreadcrumbs";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: "none", md: "flex" },
        width: "100%",
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        maxWidth: { sm: "100%", md: "1700px" },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <IconButton aria-label="Open notifications">
          <NotificationsRoundedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
}
