import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { flex } from "../../styleObject";
import IconsDisplayinBox from "../../Components/IconsDisplayinBox/IconsDisplayinBox";
import {
  FilterDetailsForStyleSection,
  FilterDetailsForFeatured,
  FilterDetailsForCategories,
} from "./UIData";
import FilterSection from "../../Components/FilterSection/FilterSection";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import FilterTagButtonWithXIcon from "../../Components/FilterTagButtonWithXIcon/FilterTagButtonWithXIcon";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAll_Icons_API } from "../../Context/All_Icons_API";
import NoIcons from "../../Components/NoIcons/NoIcons";

export default function DisplayIcons({ isFilterBoxOfDisplayCliked }) {
  const { AllIcons } = useAll_Icons_API();
  const displayIcons = AllIcons; // this is coming from the server or now as all_icons_api
  const { FilterDataAndIconData, setFilterDataAndIconData, setIsResetClicked } =
    useFilterData();
  const filterTagArray = Object.keys(FilterDataAndIconData);
  const isLargeScreen = useMediaQuery("(min-width: 1151px)");

  return (
    <>
      <Container maxWidth={"xl"} sx={{ bgcolor: "#F0F1F3" }} disableGutters>
        <Box
          maxWidth={"1090px"}
          sx={{
            marginInline: "auto",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(15px,4vw,30px)",
            p: "clamp(16px,10vw,36px)",
            "@media (max-width: 1151px)": {
              flexDirection: "column",
            },
          }}
        >
          {/* filters box */}
          {(isFilterBoxOfDisplayCliked || isLargeScreen) && (
            <Box
              sx={{
                maxWidth: "245px",
                width: "245px",
                flex: "1 1 245px",
                marginInline: "auto",
                "@media (max-width: 1151px)": {
                  maxWidth: "95%",
                  width: "95%",
                  flex: "1 1 100%",
                  marginInline: "auto",
                },
              }}
            >
              <Box
                sx={{
                  width: "247px",
                  height: "211px",
                  bgcolor: "#E5DBFF",
                  ...flex,
                  mb: "45px",
                  borderRadius: "1rem",
                  "@media (max-width: 1151px)": {
                    width: "100%",
                  },
                }}
              >
                AddverTiseMent Box
              </Box>
              {/* filtering data  */}
              <FilterSection
                sectionDetails={{
                  sectionName: "style",
                  sectionDetailsArray: FilterDetailsForStyleSection,
                }}
              />
              <FilterSection
                sectionDetails={{
                  sectionName: "featured",
                  sectionDetailsArray: FilterDetailsForFeatured,
                }}
              />
              <FilterSection
                sectionDetails={{
                  sectionName: "categories",
                  sectionDetailsArray: FilterDetailsForCategories,
                }}
              />
            </Box>
          )}
          {/* icons display box */}
          <Box
            sx={{
              maxWidth: "820px",
              flex: "1 1 807px",
              "@media (max-width: 1151px)": {
                maxWidth: "820px",
                width: "100%",
                flex: "1 1 100%",
                marginInline: "auto",
              },
            }}
          >
            {/* Heading Of The Box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "1rem" }}>
                <Typography
                  variant="h6"
                  component={"h2"}
                  sx={{ color: "#183153", fontWeight: "900" }}
                >
                  2,310 Icons
                </Typography>
                {/* tags button for filter the search */}
                {filterTagArray.length > 0 && (
                  <Box
                    sx={{
                      display: "flex",
                      gap: "0.5rem",
                      flexWrap: "wrap",
                      textTransform: "uppercase",
                    }}
                  >
                    {filterTagArray.map((filterTagName) => (
                      <FilterTagButtonWithXIcon
                        key={filterTagName}
                        tagName={filterTagName}
                      />
                    ))}
                    <Button
                      variant="outlined"
                      disableTouchRipple
                      sx={{
                        borderRadius: "0.8rem",
                        fontSize: "0.7rem",
                        color: "black",
                        "&:hover": {
                          color: "#146EBE",
                        },
                      }}
                      onClick={() => {
                        setFilterDataAndIconData({});
                        setIsResetClicked(true);
                      }}
                    >
                      Reset
                    </Button>
                  </Box>
                )}
              </Box>
              <Typography>Page 1 of 10</Typography>
            </Box>
            {/* Main Box for showing Icons */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(168px, 1fr))",
                gridTemplateRows: "repeat(auto-fit, minmax(168px, 1fr))", // for ensuring square boxes
                gap: "23px",
                my: "24px",
                width: "100%",
              }}
            >
              {displayIcons.length !== 0 ? displayIcons.map((elem,index) => (
                <IconsDisplayinBox key={index+elem.iconName} icon={elem.icon} />
              )) : <NoIcons />}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
