import { Box } from "@mui/material";
import Dialoge from "./Dialoge";
import DialogsHeader from "./DialogsHeader/DialogsHeader";
import emulator from "../emulator";

export default function FullDialoge({ contact }) {
  const dialoge = emulator.getDialogue(contact.id);
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: 0.8,
      }}
    >
      <DialogsHeader contact={contact} />
      <Dialoge contact={contact} dialoge={dialoge} />
    </Box>
  );
}
