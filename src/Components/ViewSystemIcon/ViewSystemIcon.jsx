import { SvgIcon, Tooltip } from "@mui/material";
import React from "react";

function ViewSystemIcon({ iconDetails: { tooltipname, icon } }) {
  return (
    <>
      <Tooltip title={tooltipname} arrow placement="top">
        <SvgIcon
          sx={{
            "&:hover": {
              fill: "#146EBE",
            },
            fontSize: "clamp(15px, 2.2vw,20px)",
          }}
        >
          {icon}
        </SvgIcon>
      </Tooltip>
    </>
  );
}

export default ViewSystemIcon;
