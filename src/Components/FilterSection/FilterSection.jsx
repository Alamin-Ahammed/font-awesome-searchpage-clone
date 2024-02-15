import { Box, Typography } from "@mui/material";
import React from "react";
import Filter from "../Filter/Filter";

export default function FilterSection({
  sectionDetails: { sectionName, sectionDetailsArray=[] },
}) {
  return (
    <>
      <Box sx={{mt: '1rem'}}>
        <Typography
          variant="body2"
          sx={{
            textTransform: "uppercase",
            color: "#616D8A",
            fontWeight: "700",
            fontSize: "0.8rem",
            mb: "10px",
          }}
        >
          {sectionName}
        </Typography>
        {sectionDetailsArray.map((FilterDetails) => (
          <Filter
            key={FilterDetails.filterName}
            FilterDetails={FilterDetails}
          />
        ))}
      </Box>
    </>
  );
}
