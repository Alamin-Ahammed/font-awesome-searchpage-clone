import { SvgIcon, Tooltip } from "@mui/material";
import { useViewStyle } from "../../Context/ViewStyle";

function ViewSystemIcon({ iconDetails: { tooltipname, icon } }) {
  const { viewStyle,setViewStyle } = useViewStyle();
  const handleViewStyle = () => {
    setViewStyle(tooltipname);
  };
  return (
    <>
      <Tooltip title={tooltipname} arrow placement="top">
        <SvgIcon
          onClick={handleViewStyle}
          sx={{
            "&:hover": {
              fill: "#146EBE",
            },
            fontSize: "clamp(15px, 2.2vw,20px)",
            fill: viewStyle === tooltipname && '#146EBE',
          }}
        >
          {icon}
        </SvgIcon>
      </Tooltip>
    </>
  );
}

export default ViewSystemIcon;
