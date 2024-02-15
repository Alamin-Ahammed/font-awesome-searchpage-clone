import { Button, SvgIcon } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useFilterData } from "../../Context/FilterDataAndIconDataStorage";
import { ResetAllProvider } from "../../Context/ResetButton";

export default function FilterTagButtonWithXIcon({ tagName }) {
  const { FilterDataAndIconData, setFilterDataAndIconData } = useFilterData();
  const handleClick = () => {
    // Creating a new object without the specified property to remove that
    const updatedFilterData = Object.keys(FilterDataAndIconData).reduce(
      (result, key) => {
        if (key !== tagName) {
          result[key] = FilterDataAndIconData[key];
        }
        return result;
      },
      {}
    );

    // Updating the state with the new object
    setFilterDataAndIconData(updatedFilterData);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={
          <SvgIcon
            sx={{
              color: "grey",
              fontSize: "1rem !important",
              mt: "4px",
            }}
          >
            <RxCross2 />
          </SvgIcon>
        }
        variant="outlined"
        sx={{
          bgcolor: "#fff !important",
          color: "black",
          borderRadius: "0.8rem",
          fontSize: "0.7rem",
          border: "none !important",
          "&:hover": {
            color: "#146EBE",
            "*": {
              color: "red",
            },
          },
        }}
        disableTouchRipple
      >
        {tagName}
      </Button>
    </>
  );
}
