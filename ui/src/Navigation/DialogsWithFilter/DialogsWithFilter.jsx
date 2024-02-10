import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import emulator from "../../emulator";
import { Box } from "@mui/material";
import DialogInList from "./DialogInList";
import { useState } from "react";
import { Stack } from "@mui/material";

export default function DialogsWithFilter({funcOnClick, options, label, contacts }) {
  const [value, setValue] = useState([]);

  const FilteredData = contacts.map((contact) => {
    if (
      value.filter((element) => contact.groups.includes(element)).length !==
        0 ||
      value.toString() === ""
    ) {
      return (
        <Box onClick={() => funcOnClick(contact)}>
          <DialogInList 
            dialoge={emulator.getDialogue(contact.id)}
            key={contact.id}
            contact={contact}
          />
        </Box>
      );
    }
  });
  return (
    <Stack direction={"row"}>
      <Box>
        <Autocomplete
          sx={{
            backgroundColor: "none",
            m: 1,
            mt: 0,
          }}
          multiple
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          id="tags-standard"
          options={options}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField {...params} variant="standard" label={label} />
          )}
        />
        {FilteredData}
      </Box>
    </Stack>
  );
}
