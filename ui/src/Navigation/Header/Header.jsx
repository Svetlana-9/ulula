import styles from "./Header.module.css";
import DialogsSearch from "./DialogsSearch/DialogsSearch";
import Stack from "@mui/material/Stack";

export default function Header() {
  return (
    <div className={styles.header}>
      <Stack direction="row" spacing={5}>
        <img className={styles.logo} src="logo192.png" alt="Ошибка" />
        <DialogsSearch />
      </Stack>
    </div>
  );
}
