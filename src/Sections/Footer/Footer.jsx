import { Box, Container, SvgIcon } from "@mui/material";
import Logo from "../../assets/Logo/Logo.png";
import Logowave from "../../assets/Logo/LogoWave.webp";
import { useRef, useState } from "react";
import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";

function Footer() {
  const LogoBoxRef = useRef(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const handleMouseEnter = () => {
    setIsLogoHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLogoHovered(false);
  };
  // here useIsOutsideClicked() hook checks if outside of this particular div is clicked by the user? if it is then hide it.
  useIsOutsideClicked(LogoBoxRef, () => {
    setIsLogoClicked(false);
  });
  return (
    <>
      <Container maxWidth="lg" sx={{ border: "1px solid black" }}>
        <Box
          ref={LogoBoxRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => {
            e.stopPropagation();
            setIsLogoClicked(true);
          }}
          sx={{
            width: "58px",
            height: "42px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ml: "2px",
            border: "3px solid transparent",
            borderRadius: "10px",
            img: { width: "24px", height: "24px" },
            border: isLogoClicked
              ? "3px solid #74C0FC"
              : "3px solid transparent",
            cursor: "pointer",
            "@media (max-width: 767px)": {
              ml: 0,
            },
          }}
        >
          {isLogoHovered || isLogoClicked ? (
            <img src={Logowave} alt="Wave Logo" />
          ) : (
            <img src={Logo} alt="Logo" />
          )}
        </Box>
        <Box></Box>
      </Container>
    </>
  );
}

export default Footer;
