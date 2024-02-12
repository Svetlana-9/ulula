import { Box } from "@mui/material";
import Dialoge from "./Dialoge";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import emulator from "../emulator";
import {Stack} from "@mui/material";

export default function FullDialoge({ contact }) {
  const dialoge = emulator.getDialogue(contact.id);
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: "100%",
      }}
    >
      <DialogsHeader contact={contact} />
      <Dialoge contact={contact} dialoge={dialoge} />
      <Stack sx={{
        position: "absolute",
        bottom: 0,
        m:1
      }} spacing={2}>
      
      </Stack>
    </Box>
  );
}
