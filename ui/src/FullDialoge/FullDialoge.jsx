import { Box } from "@mui/material";
// import emulator from "../emulator";
import DialogsHeader from "./DialogsHeader/DialogsHeader";

export default function FullDialoge({contact}) {
  // const contacts = emulator.listContacts();
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: 3 / 4,
      }}
    >
      <DialogsHeader contact={contact} />
    </Box>
  );
}
