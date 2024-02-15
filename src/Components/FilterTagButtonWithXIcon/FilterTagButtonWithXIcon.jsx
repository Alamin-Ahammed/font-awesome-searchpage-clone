import { Button, SvgIcon } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

export default function FilterTagButtonWithXIcon({tagName}) {
  return (
    <>
      <Button
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
