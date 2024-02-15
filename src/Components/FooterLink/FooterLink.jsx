import { Box, Button, Typography } from "@mui/material";

export default function FooterLink({ name, arrayOfLinks = [] }) {
  return (
    <>
      <Box sx={{
          "@media (max-width: 888px)": {
            transform: "scale(0.8)",
          },
        }}>
        <Typography
          variant="body"
          sx={{ maxWidth: "150px", color: "#515E7B", px: "8px" }}
          component={"p"}
        >
          Project
        </Typography>
        <Box>
          {arrayOfLinks.map((elem) => (
            <Button
              key={elem}
              sx={{
                color: "#fff",
                border: "none",
                background: "transparent",
                "&:hover": {
                  border: "none",
                  color: "#54A3E1",
                },
              }}
            >
              {elem}
            </Button>
          ))}
        </Box>
      </Box>
    </>
  );
}
