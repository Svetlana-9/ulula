import * as React from "react";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/system/Box";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.85),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.75),
//   },
//   // marginRight: theme.spacing(2),
//   // marginLeft: 0,
//   width: "100%",
//   height: "40px",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(30),
//     width: 'auto',
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

export default function DialogsSearch() {
  return (
    <Box sx={{
      bgcolor: "white",
      height: "35px",
      width: 1/2,
      pl:1,
      boxSizing: "border-box",
      borderRadius: 4,
    }}>
    <InputBase 
    placeholder="Поиск…"/>
    </ Box>
  );
}
