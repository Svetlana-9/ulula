import styles from "./Navigation.module.css";
import Header from "./Header/Header";
import ListWithDialogs from "./ListWithDialogs/ListWithDialogs"

export default function DialogsList () {
  return (
    <div className={styles.navigation} >
      <Header />
      <ListWithDialogs />
    </div>
  )
}