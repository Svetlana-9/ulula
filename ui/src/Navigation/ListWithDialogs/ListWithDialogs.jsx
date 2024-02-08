import GroupsFilter from "./GroupsFilter/GroupsFilter";
import DialogInList from "./DialogInList/DialogInList";
import emulator from "../../emulator";
import Box from "@mui/system/Box";

export default function ListWithDialogs() {
  const contacts = emulator.listContacts();
  const groups = emulator.getGroups();
  return (
    <Box 
    sx={{
      m:0,
      p:0,
    }}>
      <GroupsFilter list = {groups} label = {"Выберете группу"}/>
      {contacts.map((contact) => {
       return <DialogInList dialoge = {emulator.getDialogue(contact.id)} key = {contact.id} contact={contact} />;
      })}
    </Box>
  );
}
