import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { Box, Divider, Tooltip, Typography } from "@mui/material";
import Logo from "../../assets/Logo/Logo.png";
import Logowave from "../../assets/Logo/LogoWave.webp";
import SignInIcon from "../../assets/PngImg/exit.png";
import SignInAfterHoverIcon from "../../assets/PngImg/LogOutHoverImage.png";
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";

function Header() {
  const [isLogOutHovered, setIsLogOutHovered] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isLogoClicked, setIsLogoClicked] = useState(false);
  const [IsShowHamburgarMenu, setIsShowHamburgarMenu] = useState(false);
  const LogoBoxRef = useRef(null);
  const HamburgarMenuRef = useRef(null);
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
  useIsOutsideClicked(HamburgarMenuRef, () => {
    setIsShowHamburgarMenu(false);
  });

  const navbarListDetailsArray = [
    { path: "start", text: "Start" },
    {
      path: "/",
      icon: <IoSearchSharp style={{ fontSize: "1.25rem", color: "black" }} />,
    },
    { path: "icons", text: "Icons" },
    { path: "docs", text: "Docs" },
    { path: "plans", text: "Plans" },
    { path: "support", text: "Support" },
    { path: "podcast", text: "Podcast" },
  ];
  const hamburgarListDetailsArray = [
    { path: "start", text: "Start" },
    {
      path: "/",
      text: "Search",
    },
    { path: "icons", text: "Icons" },
    { path: "docs", text: "Docs" },
    { path: "plans", text: "Plans" },
    { path: "support", text: "Support" },
    { path: "podcast", text: "Podcast" },
  ];

  const stylesOfThisPage = {
    navbarMainBox: {
      maxWidth: "1150px",
      marginTop: "14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginInline: "auto",
      "@media (max-width: 1151px)": {
        justifyContent: "center",
      },
      "@media (max-width: 767px)": {
        px: "1.4rem",
        marginTop: "7px",
        justifyContent: "space-between",
      },
    },
    logoBoxWithNavListBox: {
      display: "flex",
      alignItems: "center",
      gap: "45px",
    },
    logoBox: {
      width: "58px",
      height: "42px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ml: "2px",
      border: "3px solid transparent",
      borderRadius: "10px",
      img: { width: "24px", height: "24px" },
      border: isLogoClicked ? "3px solid #74C0FC" : "3px solid transparent",
      cursor: "pointer",
      "@media (max-width: 767px)": {
        ml: 0,
      },
    },
    navListBox: {
      display: "flex",
      alignItems: "center",
      ".navlinkItem": {
        display: "block",
        fontSize: "0.95rem",
        color: "#708ba4",
        padding: "12px 16px",
        border: "3px solid",
        borderColor: "transparent",
        "&:active": { borderColor: "#74C0FC", color: "black" },
      },
      gap: "0.5rem",
      "@media (max-width: 767px)": {
        display: "none", // hide the flex menu for screens less than 767px
      },
    },
    hamburgarMenuBox: {
      display: "none",
      "@media (max-width: 767px)": {
        display: "block", // Show the hamburger menu for screens less than 767px
      },
    },
    hamburgarMenu: {
      display: IsShowHamburgarMenu ? "block" : "none",
      position: "relative",
      // top: "3rem",
      top: 0,
      left: "1.5rem",
      width: "92%",
      "@media (min-width: 767px)": {
        display: "none",
      },
      color: "#616D8A",
    },
    signInBox: {
      mr: "2rem",
      "@media (max-width: 767px)": {
        mr: 0,
      },
    },
  };

  return (
    <>
      <Box sx={stylesOfThisPage.navbarMainBox}>
        {/* this is Hamburgar menu */}
        <Box sx={stylesOfThisPage.hamburgarMenuBox}>
          <Box
            ref={HamburgarMenuRef}
            onClick={() => setIsShowHamburgarMenu(!IsShowHamburgarMenu)}
            sx={{ color: "#616D8A", fontSize: "1.7rem" }}
          >
            <HiOutlineMenu
              style={{ display: IsShowHamburgarMenu ? "none" : "block" }}
            />{" "}
            <RxCross2
              style={{
                display: IsShowHamburgarMenu ? "block" : "none",
                fontSize: "1.5rem",
              }}
            />
          </Box>
        </Box>

        <Box sx={stylesOfThisPage.logoBoxWithNavListBox}>
          <Box
            ref={LogoBoxRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => {
              e.stopPropagation();
              setIsLogoClicked(true);
            }}
            sx={stylesOfThisPage.logoBox}
          >
            {isLogoHovered || isLogoClicked ? (
              <img src={Logowave} alt="Wave Logo" />
            ) : (
              <img src={Logo} alt="Logo" />
            )}
          </Box>
          {/* This is Flex menu for large screen. */}
          <Box sx={stylesOfThisPage.navListBox}>
            {navbarListDetailsArray.map((navElem) =>
              navElem.hasOwnProperty("text") ? (
                <NavLink to={navElem.path} key={navElem.path}>
                  <Typography
                    className="navlinkItem"
                    variant="body1"
                    component={"div"}
                  >
                    {navElem.text}
                  </Typography>
                </NavLink>
              ) : (
                <NavLink to={navElem.path} key={navElem.path}>
                  <Box className="navlinkItem">{navElem.icon}</Box>
                </NavLink>
              )
            )}
          </Box>
        </Box>
        <Box
          onMouseEnter={() => setIsLogOutHovered(true)}
          onMouseLeave={() => setIsLogOutHovered(false)}
          sx={stylesOfThisPage.signInBox}
        >
          {isLogOutHovered ? (
            <Tooltip title="Sign In" arrow placement="left">
              <img
                src={SignInAfterHoverIcon}
                alt="Log out"
                className="fadeIn"
              />
            </Tooltip>
          ) : (
            <img src={SignInIcon} alt="exit" className="fadeIn" />
          )}
        </Box>
      </Box>

      {/* this is hamburgar menu lists. It belongs to hamburgarMenuBox. */}
      <Box sx={stylesOfThisPage.hamburgarMenu}>
        {hamburgarListDetailsArray.map((hamburgarElem, index) => (
          <NavLink
            style={{ display: "block", color: "#616D8A" }}
            to={hamburgarElem.path}
            key={hamburgarElem.path}
          >
            <Typography
              variant="body1"
              component={"div"}
              sx={{ p: "0.6rem", fontSize: "0.8rem" }}
            >
              {hamburgarElem.text}
            </Typography>
            <Divider
              sx={{
                backgroundColor:
                  index == hamburgarListDetailsArray.length - 1 && "#E3E5EA",
              }}
            />
          </NavLink>
        ))}
      </Box>
    </>
  );
}

export default Header;
