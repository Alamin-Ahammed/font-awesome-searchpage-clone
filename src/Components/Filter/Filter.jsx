import { Box, SvgIcon, Typography } from "@mui/material";
import { FaRegSquare } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { flex } from "../../styleObject";
import { useState } from "react";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import { ResetAll } from "../../CustomHooks/useIsOutsideClicked/ResetAllFilter";

export default function Filter({
  FilterDetails: { icon, filterName, iconNumber },
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMouseClicked, setIsMouseClicked] = useState(false);
  const { setFilterDataAndIconData } = useFilterData();
  const handleMouseIn = () => {
    setIsMouseOver(true);
  };
  const handleMouseOut = () => {
    setIsMouseOver(false);
  };
  const handleFilterClick = () => {
    setIsMouseClicked(!isMouseClicked);
    setFilterDataAndIconData((previousFilterData) => {
      // this code is working like this
      // { {neededProperty is exerted} , {rest of the properties remains same} }= distructure
      const { [filterName.toLowerCase()]: removedMenu, ...updatedFilterData } =
        previousFilterData;
      console.log(previousFilterData);

      return removedMenu
        ? updatedFilterData
        : {
            ...updatedFilterData,
            [filterName.toLowerCase()]: filterName.toLowerCase(),
          };
    });
  };

  // reseting all the filter data to normal
  ResetAll(() => setIsMouseClicked(false));
  return (
    <>
      <Box
        sx={{
          ...flex,
          justifyContent: "space-between",
          my: "0.2rem",
          padding: "0.4rem",
          transition: "all 0.2s",
          borderRadius: "0.5rem",
          border: "1px solid transparent",
          "&:hover": {
            border: "1px solid #616D8A",
          },
          cursor: "pointer",
          background: isMouseClicked ? "#146EBE" : "transparent",
          color: isMouseClicked ? "#fff" : "black",
        }}
        onMouseEnter={handleMouseIn}
        onMouseLeave={handleMouseOut}
        onClick={handleFilterClick}
      >
        <Box
          sx={{
            ...flex,
            svg: {
              fontSize: "18.8px",
            },
          }}
        >
          {!isMouseClicked && (
            <Box sx={{ ...flex }}>
              {isMouseOver ? (
                <SvgIcon>
                  <FaRegSquare />
                </SvgIcon>
              ) : (
                icon || (
                  <SvgIcon>
                    <FaCircle />
                  </SvgIcon>
                )
              )}
            </Box>
          )}
          {isMouseClicked && (
            <SvgIcon>
              <FaRegCheckSquare />
            </SvgIcon>
          )}
          <Typography
            variant="body2"
            component={"p"}
            sx={{ textTransform: "capitalize" }}
          >
            {filterName || ""}
          </Typography>
        </Box>
        <Typography variant="body2" component={"p"}>
          {iconNumber || ""}
        </Typography>
      </Box>
    </>
  );
}
