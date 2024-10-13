import { Container, Typography } from "@mui/material";
import React from "react";

const Page = ({ pathname }) => {
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Typography variant="h3">Page for {pathname}</Typography>
    </Container>
  );
};

export default Page;
