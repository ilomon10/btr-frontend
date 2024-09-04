import { Stack, Box, Typography } from "@mui/material";

export default function SiteLogo() {
  return (
    <Stack sx={{ p: 1, alignItems: "center" }} direction="row" gap={1}>
      <Box
        sx={{
          display: "flex",
          border: "1px solid black",
          width: 50,
          minWidth: 50,
          height: 50,
          minHeight: 50,
          borderRadius: "1000px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography color="red" fontWeight={"bold"}>
          S
        </Typography>
        <Typography color="blue" fontWeight={"bold"}>
          M
        </Typography>
        <Typography color="yellow" fontWeight={"bold"}>
          A
        </Typography>
      </Box>
      <Box>Business Travel Request</Box>
    </Stack>
  );
}
