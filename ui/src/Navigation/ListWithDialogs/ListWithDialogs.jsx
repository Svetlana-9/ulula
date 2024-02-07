import ButtonGroups from "./ButtonGroups/ButtonGroups";
import DialogInList from "./DialogInList/DialogInList";
import emulator from "../../emulator";
import styles from "./ListWithDialogs.module.css"

export default function ListWithDialogs() {
  const contacts = emulator.listContacts();
  return (
    <div className={styles.listWithDialogs}>
      <ButtonGroups />
      {contacts.map((contact) => {
       return <DialogInList key = {contact.id} contact={contact} />;
      })}
    </div> 
  );
}
