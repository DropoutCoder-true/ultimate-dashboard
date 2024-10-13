import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { Box } from "@mui/material";

export const Badges = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Badge
        badgeContent={10}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MailIcon color="action" />
      </Badge>
      <Badge
        badgeContent={4}
        color="primary"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <NotificationsActiveIcon color="action" />
      </Badge>
    </Box>
  );
};
