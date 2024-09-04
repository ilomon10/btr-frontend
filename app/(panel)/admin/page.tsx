"use server";

import StatCard, { StatCardProps } from "@/components/StatCard";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import DashboardDataGrid from "./DashboardDataGrid";
import { Suspense } from "react";
import Loading from "../loading";
import Header from "./Header";

const data: StatCardProps[] = [
  {
    title: "Active BTR",
    value: "14k",
    interval: "Last 30 days",
    trend: "up",
    data: [
      200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340,
      380, 360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
    ],
  },
  {
    title: "Requested BTR",
    value: "325",
    interval: "Last 30 days",
    trend: "down",
    data: [
      1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600,
      820, 780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300,
      220,
    ],
  },
  {
    title: "Monthly Spend",
    value: "Rp. 200jt",
    interval: "Last 30 days",
    trend: "neutral",
    data: [
      500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510,
      530, 520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
    ],
  },
];

export default async function Page() {
  return (
    <Box
      sx={{
        px: 2,
        flexGrow: 1,
        width: "1px",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: { sm: "100%", md: "1080px" },
        }}
      >
        <Header />
        <Typography component="h2" variant="h6" sx={{ mt: 3, mb: 2 }}>
          Overview
        </Typography>
        <Grid2 container spacing={2} columns={12} sx={{ mb: 2 }}>
          {data.map((card, index) => (
            <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
              <StatCard {...card} />
            </Grid2>
          ))}
        </Grid2>
        <Grid2 container spacing={2} columns={12}>
          <DashboardDataGrid />
        </Grid2>
      </Box>
    </Box>
  );
}
