"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Breadcrumbs, { breadcrumbsClasses } from "@mui/material/Breadcrumbs";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import { usePathname } from "next/navigation";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: theme.palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: "center",
  },
}));

export default function NavbarBreadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").splice(1);
  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
      {paths.map((path, idx) =>
        idx > 0 ? (
          <Typography
            variant="body1"
            sx={{
              color: "text.primary",
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {path.replace("-", " ")}
          </Typography>
        ) : (
          <Typography variant="body1">Dashboard</Typography>
        )
      )}
    </StyledBreadcrumbs>
  );
}
