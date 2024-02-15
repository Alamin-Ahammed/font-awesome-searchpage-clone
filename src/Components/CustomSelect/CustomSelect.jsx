// import React, { useState } from "react";
// import { Select, MenuItem } from "@mui/material";
// import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";

// const CustomSelect = ({ value, onChange, sortOptions }) => {
//   const [isFocused, setIsFocused] = useState(false);

//   const handleFocus = () => {
//     setIsFocused(true);
//   };

//   const handleBlur = () => {
//     setIsFocused(false);
//   };

//   return (
//     <Select
//       value={value || "Featured"}
//       onChange={(e) => onChange(e, setIsFocused, isFocused)}
//       onFocus={handleFocus}
//       onBlur={handleBlur}
//       sx={{
//         border: "2px solid #C3C6D1",
//         "&:hover, &:focus, &:active": {
//           outline: "none !important",
//         },
//         "&:hover fieldset, &:focus fieldset, &:active fieldset": {
//           border: "none !important",
//         },
//         "*": {
//           border: "none !important",
//         },
//         minWidth: "165px",
//         ".MuiSelect-select": {
//           padding: "13px 22px",
//         },
//         // from here custom styles are starting
//         outline: isFocused
//           ? "3px solid  #74C0FC !important"
//           : "none !important",
//         borderRadius: "1rem",
//       }}
//     >
//       {sortOptions.map((option) => (
//         <MenuItem key={option.label} value={option.value}>
//           {option.label}
//         </MenuItem>
//       ))}
//     </Select>
//   );
// };

// export default CustomSelect;

import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import { useIsOutsideClicked } from "../../CustomHooks/useIsOutsideClicked/useIsOutsideClicked";

const CustomSelect = ({ value, onChange, sortOptions }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Select
      value={value || "Featured"}
      onChange={(e) => onChange(e, setIsFocused, isFocused)}
      onFocus={handleFocus}
      onBlur={handleBlur}
      sx={{
        border: "2px solid #C3C6D1",
        "&:hover, &:focus, &:active": {
          outline: "none !important",
        },
        "&:hover fieldset, &:focus fieldset, &:active fieldset": {
          border: "none !important",
        },
        "*": {
          border: "none !important",
        },
        minWidth: "165px",
        ".MuiSelect-select": {
          padding: "clamp(10px, 4vw, 13px) clamp(15px, 8vw, 22px)",
        },
        // from here custom styles are starting
        outline: isFocused
          ? "clamp(2px, 0.3%, 3px) solid  #74C0FC !important"
          : "none !important",
        borderRadius: "clamp(0.5rem, 2%, 1rem)",
      }}
    >
      {sortOptions.map((option) => (
        <MenuItem key={option.label} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
