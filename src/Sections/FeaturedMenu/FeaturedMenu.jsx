import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import LargeMenuItem from "../../Components/LargeMenuItem/LargeMenuItem";
import { flex } from "../../styleObject";
import ViewSystemIcon from "../../Components/ViewSystemIcon/ViewSystemIcon";
import {
  LargeMenuListArray,
  sortOptions,
  viewSystemIconsListArray,
  sortOptionsforVersions,
} from "./UIData";
import CustomSelect from "../../Components/CustomSelect/CustomSelect";
import { useState } from "react";
import { LuListFilter } from "react-icons/lu";

export default function FeaturedMenu({ handlefilterBoxOfDisplaySection }) {
  const [isFeaturedItemSelct, setIsFeaturedItemSelct] = useState("");
  const [isVersionSelected, setisVersionSelected] = useState("6.5.1");
  const stylesOfFeaturedMenu = {
    mainBox: {
      ...flex,
      maxWidth: "1090px",
      marginInline: "auto",
      width: "90%",
      justifyContent: "space-between",
      "@media (max-width: 1151px)": {
        flexDirection: "column-reverse",
      },
      "@media (max-width: 767px)": {
        gap: "0.5rem",
        width: "98%",
      },
    },
    largeMenuBox: {
      ...flex,
      gap: "clamp(0.5rem, 2%, 1rem)",
      my: "31px",
    },
    viewandfeatureFilterButtonBox: {
      ...flex,
      gap: "clamp(1rem, 2%, 2rem)",
      width: "100%",
      flexWrap: "wrap",
      "@media (max-width: 767px)": {
        gap: "clamp(0.5rem, 2%, 1rem)",
      },
    },
    viewandfeatureBox: {
      ...flex,

      gap: "clamp(0.5rem, 2%, 1rem)",
      "@media (max-width: 767px)": {
        flex: "1 1",
        gap: "clamp(0.5rem, 2%, 1rem)",
      },
    },
    viewSystem: {
      fontSize: "clamp(0.5rem, 2%, 1rem)",
      ...flex,
      gap: "clamp(0.5rem, 8vw, 2rem)",
      "@media (max-width: 1151px)": {
        gap: "clamp(0.5rem, 2%, 1rem)",
      },
      "@media (max-width: 767px)": {
        gap: "clamp(0.5rem, 4vw, 1rem)",
      },
    },
    featuredMenu: {
      ...flex,
      gap: "clamp(0.5rem, 1%, 1rem)",
      "@media (max-width: 767px)": {
        gap: "0.4rem",
      },
    },
    filterButtonBox: {
      display: "none",
      "@media (max-width: 1151px)": {
        display: "flex",
        width: "190px",
      },
      "@media (max-width: 767px)": {
        display: "flex",
        flex: "1 1",
      },
    },
    filterButton: {
      display: "inlin-block",
      py: "13px",
      border: "2px solid rgb(240, 241, 243)",
      borderRadius: "0.8rem",
      gap: "0.4rem",
      mr: "clamp(15px, 9vw,36px)",
      width: "100%",
      "@media (max-width: 1151px)": {
        mr: 0,
      },
      "@media (max-width: 767px)": {
        mr: 0,
        svg: {
          fontSize: "1.3rem",
        },
        "*": {
          fontSize: "0.8rem",
        },
      },
    },
  };

  const handleSelectChange = (e, setIsFocused) => {
    setIsFeaturedItemSelct(e.target.value);
    setTimeout(() => {
      setIsFocused(false);
    }, 50);
  };

  const handleSelectVersion = (e, setIsFocused) => {
    setisVersionSelected(e.target.value);
    setTimeout(() => {
      setIsFocused(false);
    }, 50);
  };

  return (
    <>
      <Container maxWidth={"lg"} disableGutters>
        {/* classic sharp brands free Section Box. */}
        <Box sx={stylesOfFeaturedMenu.mainBox}>
          <Box sx={stylesOfFeaturedMenu.largeMenuBox}>
            {LargeMenuListArray.map((menuElem) => (
              <LargeMenuItem
                key={menuElem.menuName}
                icon={menuElem.icon}
                menuName={menuElem.menuName}
              />
            ))}
          </Box>

          {/* Featured Menu Box + view changing Box Section */}
          <Box sx={stylesOfFeaturedMenu.viewandfeatureFilterButtonBox}>
            {/* Here the filters Box for the breakpoints of 1151px or less.other wise it will be display none */}
            <Box
              sx={stylesOfFeaturedMenu.filterButtonBox}
              onClick={handlefilterBoxOfDisplaySection}
            >
              <Button
                variant="outlined"
                disableTouchRipple
                sx={stylesOfFeaturedMenu.filterButton}
                fullWidth
              >
                <SvgIcon>
                  <LuListFilter />
                </SvgIcon>
                <Typography
                  sx={{
                    textTransform: "Capitalize",
                  }}
                >
                  Show Filters
                </Typography>
              </Button>
            </Box>
            <Box sx={stylesOfFeaturedMenu.viewandfeatureBox}>
              {/* view changing Box, gridicons box. */}
              <Box sx={stylesOfFeaturedMenu.viewSystem}>
                {viewSystemIconsListArray.map((iconDetails) => (
                  <ViewSystemIcon
                    key={iconDetails.tooltipname}
                    iconDetails={iconDetails}
                  />
                ))}
              </Box>
              {/* Featured Menu Box Section */}
              <Box sx={stylesOfFeaturedMenu.featuredMenu}>
                <CustomSelect
                  value={isFeaturedItemSelct}
                  onChange={handleSelectChange}
                  sortOptions={sortOptions}
                />
                <CustomSelect
                  value={isVersionSelected}
                  onChange={handleSelectVersion}
                  sortOptions={sortOptionsforVersions}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
