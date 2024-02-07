import Avatar from "@mui/material/Avatar";
import styles from "./DialogInList.module.css";
import { Stack } from "@mui/material";

export default function DialogInList({contact}) {
  return (
    <div className={styles.dialogInList}>
      <Stack direction="row" spacing={5}>
        <Avatar className={styles.avatar} src={contact.avatar} sx={{ width: 80, height: 80}} />
        <h2 className={styles.alias}>{contact.alias}</h2>
      </Stack>
    </div>
  );
}
