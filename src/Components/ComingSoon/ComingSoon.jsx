import { Container, Typography } from "@mui/material";
import { flex } from "../../styleObject";

function ComingSoon({ pageName }) {
  return (
    <Container maxWidth='xl' sx={{height: '60vh',...flex,flexDirection: 'column'}}>
      <Typography variant="h1">{pageName}</Typography>
      <Typography variant="h3">ComingSoon....</Typography>
    </Container>
  );
}

export default ComingSoon;
