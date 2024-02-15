import { Container } from "@mui/material";
import React from "react";

function ComingSoon({ pageName }) {
  return (
    <Container maxWidth='xl' sx={{height: '80%'}}>
      <div>{pageName}</div>
      <div>ComingSoon....</div>
    </Container>
  );
}

export default ComingSoon;
