"use server";

import {
  Box,
  Button,
  FormControl,
  Grid2,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import DashboardDataGrid from "../DashboardDataGrid";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Header from "../Header";
import AddIcon from "@mui/icons-material/Add";

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
          Business Travel Request List
        </Typography>
        <Grid2 container spacing={2} columns={12} mb={2}>
          <Grid2 size={8}>
            <FormControl
              sx={{ width: { xs: "100%", md: "25ch" } }}
              variant="outlined"
            >
              <OutlinedInput
                size="small"
                id="search"
                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                  <InputAdornment
                    position="start"
                    sx={{ color: "text.primary" }}
                  >
                    <SearchRoundedIcon fontSize="small" />
                  </InputAdornment>
                }
                inputProps={{
                  "aria-label": "search",
                }}
              />
            </FormControl>
          </Grid2>
          <Grid2 size={4}>
            <Stack alignItems={"end"}>
              <Button variant="outlined" startIcon={<AddIcon />}>
                Create new BTR
              </Button>
            </Stack>
          </Grid2>
        </Grid2>
        <Stack>
          <DashboardDataGrid />
        </Stack>
      </Box>
    </Box>
  );
}
