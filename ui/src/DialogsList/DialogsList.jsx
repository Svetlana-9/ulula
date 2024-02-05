import DialogsSearch from "./DialogsSearch/DialogsSearch";
import styles from"./DialogsList.module.css";
export default function DialogsList () {
  return (
    <div className={styles.style} >
      <DialogsSearch />
    </div>
  )
}