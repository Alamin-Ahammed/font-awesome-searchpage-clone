import { FaCircle } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import { TbCircleHalf } from "react-icons/tb";
import { WiMoonAltWaningGibbous6 } from "react-icons/wi";
import { MdAutoAwesome } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaUniversalAccess } from "react-icons/fa6";
import { HiBellAlert } from "react-icons/hi2";
import { FaCat } from "react-icons/fa";
import { SvgIcon } from "@mui/material";

export const FilterDetailsForStyleSection = [
  {
    icon: (
      <SvgIcon>
        <FaCircle />
      </SvgIcon>
    ),
    filterName: "solid",
    iconNumber: "6,122",
  },
  {
    icon: (
      <SvgIcon>
        <BsCircleHalf />
      </SvgIcon>
    ),
    filterName: "Regular",
    iconNumber: "6,122",
  },
  {
    icon: (
      <SvgIcon>
        <TbCircleHalf />
      </SvgIcon>
    ),
    filterName: "Light",
    iconNumber: "6,122",
  },
  {
    icon: (
      <SvgIcon>
        <TbCircleHalf />
      </SvgIcon>
    ),
    filterName: "Thin",
    iconNumber: "6,122",
  },
  {
    icon: (
      <SvgIcon>
        <WiMoonAltWaningGibbous6 />
      </SvgIcon>
    ),
    filterName: "Duotone",
    iconNumber: "6,122",
  },
];

export const FilterDetailsForFeatured = [
  {
    icon: (
      <SvgIcon>
        <MdAutoAwesome />
      </SvgIcon>
    ),
    filterName: "new in v6",
    iconNumber: "6,122",
  },
  {
    icon: (
      <SvgIcon>
        <AiFillDollarCircle />
      </SvgIcon>
    ),
    filterName: "Sponsord",
    iconNumber: "6,122",
  },
  {
    icon: (
      <SvgIcon>
        <AiFillDollarCircle />
      </SvgIcon>
    ),
    filterName: "Staf favorites",
    iconNumber: "6,122",
  },
];

export const FilterDetailsForCategories = [
  {
    icon: (
      <SvgIcon>
        <FaUniversalAccess />
      </SvgIcon>
    ),
    filterName: "Accessibility",
    iconNumber: "27",
  },
  {
    icon: (
      <SvgIcon>
        <HiBellAlert />
      </SvgIcon>
    ),
    filterName: "Alert",
    iconNumber: "12",
  },
  {
    icon: (
      <SvgIcon>
        <AiFillDollarCircle />
      </SvgIcon>
    ),
    filterName: "Animals",
    iconNumber: "20",
  },
];
