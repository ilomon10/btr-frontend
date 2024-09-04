"use server";

import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  Grid2,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Header from "../../Header";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
        <Grid2 container spacing={2} columns={12} mb={2}>
          <Grid2 container size={8} spacing={2} columns={12}>
            <Header />
            <Grid2 size={6}>
              <Typography>BTR ID</Typography>
              <Typography fontSize={24}>#5122345</Typography>
            </Grid2>
            <Grid2 size={6}>
              <Typography>Subject</Typography>
              <Typography fontSize={24}>Roster OFF</Typography>
            </Grid2>
            <Card variant="outlined" sx={{ width: "100%", p: 2, pb: 3 }}>
              <Grid2 container size={12} rowSpacing={2} columnSpacing={3}>
                <TextField variant="filled" label="Staff ID" fullWidth />
                <Grid2 size={6}>
                  <TextField variant="filled" label="Fullname" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField variant="filled" label="Job Position" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField variant="filled" label="Phone" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField variant="filled" label="Department" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField variant="filled" label="Place of Hire" fullWidth />
                </Grid2>
                <Grid2 size={6}>
                  <TextField variant="filled" label="Project Site" fullWidth />
                </Grid2>
              </Grid2>
            </Card>
            <Typography fontSize={24} mt={3} width={"100%"}>
              Accomodation
            </Typography>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <Stack
                component={Grid2}
                direction={"row"}
                alignItems={"center"}
                container
                columns={12}
                py={1}
              >
                <Grid2 size={1}>
                  <Checkbox />
                </Grid2>
                <Stack
                  component={Grid2}
                  size={11}
                  direction={"row"}
                  justifyContent={"space-between"}
                  pr={2}
                >
                  <Button color="error">Delete selected Item</Button>
                  <Button variant="outlined" startIcon={<AddIcon />}>
                    Add Accomodation
                  </Button>
                </Stack>
              </Stack>
              {[1, 2].map((v, idx) => (
                <>
                  <Divider style={{ width: "100%" }} />
                  <Stack
                    key={idx}
                    component={Grid2}
                    direction={"row"}
                    alignItems={"center"}
                    container
                    columns={12}
                    py={2}
                  >
                    <Grid2 size={1}>
                      <Checkbox />
                    </Grid2>
                    <Stack
                      component={Grid2}
                      size={10}
                      container
                      direction={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                      columns={12}
                      pr={2}
                    >
                      <Grid2 size={3}>
                        <Typography fontSize={12} textTransform={"uppercase"}>
                          Transportation
                        </Typography>
                        <Typography fontWeight={"bold"}>Airplane</Typography>
                      </Grid2>
                      <Grid2 size={3}>
                        <Typography fontSize={12} textTransform={"uppercase"}>
                          Route
                        </Typography>
                        <Typography fontWeight={"bold"}>MDO-CGK</Typography>
                      </Grid2>
                      <Grid2 size={3}>
                        <Typography fontSize={12} textTransform={"uppercase"}>
                          Date
                        </Typography>
                        <Typography fontWeight={"bold"}>2024-08-24</Typography>
                      </Grid2>
                      <Grid2 size={3}>
                        <Typography fontSize={12} textTransform={"uppercase"}>
                          Cost
                        </Typography>
                        <Typography fontWeight={"bold"}>
                          Rp. 2.500.000
                        </Typography>
                      </Grid2>
                    </Stack>
                    <Grid2 size={1}>
                      <IconButton>
                        <KeyboardArrowDownIcon />
                      </IconButton>
                    </Grid2>
                    <Divider />
                  </Stack>
                </>
              ))}
            </Card>
          </Grid2>
          <Grid2 size={4}></Grid2>
        </Grid2>
      </Box>
    </Box>
  );
}
