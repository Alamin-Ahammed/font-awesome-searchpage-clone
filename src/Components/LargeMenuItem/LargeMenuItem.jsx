import { Box, SvgIcon, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import { ResetAll } from "../../CustomHooks/useIsOutsideClicked/ResetAllFilter";

function LargeMenuItem({ icon, menuName }) {
  const menuItemRef = useRef(null);
  const [isOutsideClicked, setIsOutsideClick] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  // this is for changing the filter data to manage in display which icon should be appeared.
  const { setFilterDataAndIconData, isResetClicked, setIsResetClicked } =
    useFilterData();
  const dynamicStyle = {
    color: "#146EBE",
    fill: "#146EBE",
    borderBottom: "3px solid #146EBE",
  };
  const activeButHoveringMenuStyles = {
    color: "#74C0FC",
    fill: "#74C0FC",
    borderBottom: "3px solid #74C0FC",
  };
  useIsOutsideClicked(
    menuItemRef,
    () => {
      setIsOutsideClick(false);
    },
    () => {
      setIsOutsideClick(true);
    }
  );
  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
    setFilterDataAndIconData((previousFilterData) => {
      // this code is working like this
      // { {neededProperty is exerted} , {rest of the properties remains same} }= distructure
      const { [menuName.toLowerCase()]: removedMenu, ...updatedFilterData } =
        previousFilterData;
      console.log(previousFilterData);

      return removedMenu
        ? updatedFilterData
        : {
            ...updatedFilterData,
            [menuName.toLowerCase()]: menuName.toLowerCase(),
          };
    });
  };

  // resetting all the filter in this page was clicked
  ResetAll(() => setIsMenuClicked(false));

  return (
    <Box
      sx={{
        border: isOutsideClicked
          ? "3px solid #74C0FC"
          : "3px solid transparent",
        padding: "20px 1px 1px 1px",
      }}
      ref={menuItemRef}
    >
      <Box
        sx={{
          width: "114px",
          borderBottom: isMenuClicked
            ? "3px solid #146EBE"
            : "3px solid transparent",
          textAlign: "center",
          color: isMenuClicked ? "#146EBE" : "black",
          fill: isMenuClicked ? "#146EBE" : "black",
          "&:hover": isMenuClicked
            ? { ...activeButHoveringMenuStyles }
            : {
                ...dynamicStyle,
              },
        }}
        onClick={handleMenuClick}
      >
        <SvgIcon sx={{ fontSize: "2rem" }}>{icon}</SvgIcon>
        <Typography variant="body1" sx={{ py: "1rem", fontSize: "14px" }}>
          {menuName}
        </Typography>
      </Box>
    </Box>
  );
}

export default LargeMenuItem;
