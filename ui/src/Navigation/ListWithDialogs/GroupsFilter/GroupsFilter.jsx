import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function GroupFilter({ list, label }) {
  return (
    <Autocomplete
      sx={{
        backgroundColor: "none",
        m:1,
        mt:0,
      }}
      multiple
      id="tags-standard"
      options={list}
      getOptionLabel={(option) => option}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          placeholder={label}
        />
      )}
    />
  );
}
