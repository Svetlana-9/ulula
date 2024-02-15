import Header from "./Header/Header";
import Box from "@mui/system/Box";
import DialogsWithFilter from "./DialogsWithFilter/DialogsWithFilter"
import emulator from "../emulator";

export default function DialogsList( {funcOnClick}) {
  const groups = emulator.getGroups();
  const contacts = emulator.listContacts();
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        width: 0.2,
        boxSizing: "border-box",
        borderRight: "2px solid black",
        height: "100vh",
      }}
    >
      <Header />
      <DialogsWithFilter funcOnClick= {funcOnClick} options = {groups} label = {"Выберете группу"} contacts = {contacts} />
    </Box>
  );
}
