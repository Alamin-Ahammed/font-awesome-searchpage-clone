import { Box, Button, Typography } from "@mui/material";
import { flex } from "../../styleObject";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import { ResetAll } from "../../CustomHooks/useIsOutsideClicked/ResetAllFilter";
import { useResetProvider } from "../../Context/ResetButton";

export default function NoIcons() {
  const { setFilterDataAndIconData } = useFilterData();
  const { setIsContextResetClicked } =
    useResetProvider();

  const handleClick = () => {
    setFilterDataAndIconData({});
    setIsContextResetClicked(true)
  };
  return (
    <Box
      sx={{
        ...flex,
        flexDirection: "column",
        bgcolor: "#fff",
        p: "27px 36px",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "600", fontFamily: "Arial,sans-serif" }}
      >
        🤔
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontWeight: "600", fontFamily: "Arial,sans-serif" }}
      >
        No Icons Found
      </Typography>
      <Typography variant="body">
        There are no icons that match your current filters. Try removing some of
        them to get better results.
      </Typography>
      <Button
        onClick={handleClick}
        variant="outlined"
        disableTouchRipple
        sx={{
          color: "#183153",
          border: "2px solid #183153",
          borderBottom: "5px solid #183153",
          "&:hover": {
            border: "2px solid #183153",
            borderBottom: "5px solid #183153",
          },
        }}
      >
        Clear All Filters + Start Over
      </Button>
    </Box>
  );
}
