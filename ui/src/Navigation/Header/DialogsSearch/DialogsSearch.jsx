import * as React from "react";
import InputBase from "@mui/material/InputBase";
// import Box from "@mui/system/Box";

export default function DialogsSearch() {
  return (
    <InputBase sx={{
     bgcolor: "white",
    //  border:"1px solid #59b3a2",
     height: "35px",
     width: 1/2,
     pl:1,
     boxSizing: "border-box",
     borderRadius: 4,
    }}
    placeholder="Поиск…"/>
  );
}
