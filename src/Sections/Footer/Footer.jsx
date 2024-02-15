import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import Logo from "../../assets/Logo/Logo.png";
import Logowave from "../../assets/Logo/LogoWave.webp";
import { useRef, useState } from "react";
import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";
import { flex } from "../../styleObject";
import FooterLink from "../../Components/FooterLink/FooterLink";

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
  const linksArray = [
    {
      name: "Project",
      links: ["Download", "Changelog", "Commission Icons", "All Versions"],
    },
    {
      name: "Community",
      links: ["GitHub", "Icon Request", "Twitter", "Blog Awesome"],
    },
    {
      name: "Help",
      links: ["Support", "Troubleshooting", "Contact Us", "Status"],
    },
  ];
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#183153",
          ...flex,
          "@media (max-width: 767px)": {
            flexDirection: "column",
          },
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            color: "#fff",
            py: "2rem",
            mx: "auto",
            "@media (max-width: 912px)": {
              transform: "scale(0.8)",
            },
            "@media (max-width: 767px)": {
              transform: "scale(1)",
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width: 767px)": {
                flexDirection: "column",
              },
            }}
          >
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                ml: "1.1rem",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontSize: "clamp(0.5rem,2vw,1rem)" }}
              >
                Go Make Something Awesome
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "410px",
                  "@media (max-width: 767px)": {
                    maxWidth: "100%",
                    width: "100%",
                  },
                }}
              >
                Font Awesome is the internet's icon library and toolkit used by
                millions of designers, developers, and content creators.
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  maxWidth: "410px",
                  "@media (max-width: 767px)": {
                    maxWidth: "100%",
                    width: "100%",
                  },
                }}
              >
                Made with and in Bentonville, Boston, Chicago, Grand Rapids,
                Joplin, Kansas City, Seattle, Tampa, and Vergennes.
              </Typography>
            </Box>
          </Box>
        </Container>
        <Box sx={{ ...flex }}>
          {linksArray.map((elem) => (
            <FooterLink
              key={elem.name}
              name={elem.name}
              arrayOfLinks={elem.links}
            />
          ))}
        </Box>
      </Container>
    </>
  );
}

export default Footer;
