import { Stack, Avatar, Box, Typography } from "@mui/material";
import ProfileOptionsMenu from "./ProfileOptionsMenu";

export default function Profile() {
  return (
    <Stack
      direction="row"
      sx={{
        p: 2,
        gap: 1,
        alignItems: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Avatar
        sizes="small"
        alt="Riley Carter"
        src="/static/images/avatar/7.jpg"
        sx={{ width: 36, height: 36 }}
      />
      <Box sx={{ mr: "auto" }}>
        <Typography
          variant="body2"
          sx={{ fontWeight: 500, lineHeight: "16px" }}
        >
          John Doe
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary" }}>
          johndoe@example.com
        </Typography>
      </Box>
      <ProfileOptionsMenu />
    </Stack>
  );
}
