import { Box, Container, Typography } from "@mui/material";
import { IoSearchSharp } from "react-icons/io5";
import { FaAlgolia } from "react-icons/fa6";
import { flex } from "../../styleObject";
import { useEffect, useRef, useState } from "react";
import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";
import { useLocation } from "react-router-dom";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import { ResetAll } from "../../CustomHooks/useIsOutsideClicked/ResetAllFilter";

function SearchBar() {
  const location = useLocation();
  const outlineBoxRef = useRef(null);
  const searchBarInputRef = useRef(null);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(true);
  const [isOutsideClicked, setIsOutsideClick] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { setFilterDataAndIconData } = useFilterData();
  const stylesOfThisPage = {
    outline: {
      borderRadius: "2rem",
      padding: "1px",
      outline: isSearchBarFocused ? "3px solid #74C0FC" : "none",
      maxWidth: "880px",
      "@media (max-width: 1151px)": {
        maxWidth: "680px",
      },
      marginInline: "auto",
    },
    searchBarBox: {
      ...flex,
      maxWidth: "880px",
      border: "2px solid #183153",
      borderRadius: "2rem",
      position: "relative",
      padding: "2px 0.5rem",
      "@media (max-width: 1151px)": {
        maxWidth: "680px",
        border: "1px solid #183153",
      },
    },
    iconsStyle: {
      ...flex,
      fontSize: "1.5rem",
    },
    inputStyle: {
      outline: "none",
      border: "none",
      borderRadius: "clamp(1rem, 2vw, 2rem)",
      padding:
        "clamp(0.8rem, 3vw, 1.2rem) 0 clamp(0.8rem, 3vw, 1.2rem) clamp(0.5rem, 3vw, 1rem)",
      fontSize: "1rem",
      width: "100%",
      color: "#616D8A",
    },
    algoliaTextBox: {
      ...flex,
      position: "absolute",
      right: "1.5rem",
      ".css-ahj2mt-MuiTypography-root": {
        fontSize: "0.9rem",
        color: "#616D8A",
      },
      gap: "8px",
    },
    algoliaIcon: {
      fontSize: "1rem",
      color: "#616D8A",
      marginRight: "3px",
    },
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (location.pathname === "/") {
        handleFocus();
      }
    }, 100); // the delay is for surely call handlefocus fully and preventing others to recalculate the IsSearchBarFocused to false

    return () => clearTimeout(timeoutId);
  }, [location]);

  useIsOutsideClicked(outlineBoxRef, () => {
    setIsSearchBarFocused(false);
  });

  const handleFocus = () => {
    setIsSearchBarFocused(true);
    searchBarInputRef.current.focus();
  };

  const handleSearchInput = (e) => {
    e.preventDefault(), setInputValue(e.target.value);
    // debouncing the searchbar for improving in result show
    setTimeout(() => {
      setFilterDataAndIconData((previousFilterData) => {
        return { ...previousFilterData, iconName: e.target.value };
      });
    }, 600);
  };

  // resetting all the filter in this page was clicked
  ResetAll(() => setInputValue(""));

  return (
    <>
      <Container
        maxWidth={"md"}
        sx={{ my: "40px", marginInline: "auto" }}
        disableGutters
      >
        <Box sx={stylesOfThisPage.outline} ref={outlineBoxRef}>
          <Box sx={stylesOfThisPage.searchBarBox} onClick={handleFocus}>
            <IoSearchSharp style={stylesOfThisPage.iconsStyle} />
            <Box flexBasis={"95%"}>
              <input
                value={inputValue}
                ref={searchBarInputRef}
                style={stylesOfThisPage.inputStyle}
                placeholder="Search 30,013 icons..."
                onChange={handleSearchInput}
              />
            </Box>
            <Box sx={stylesOfThisPage.algoliaTextBox}>
              <Typography>Powered by </Typography>
              <Box sx={{ ...flex }}>
                <FaAlgolia style={stylesOfThisPage.algoliaIcon} />
                <Typography>Algolia</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SearchBar;
