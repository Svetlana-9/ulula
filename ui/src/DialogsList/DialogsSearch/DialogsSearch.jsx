import styles from"./DialogsSearch.module.css";
import logo from "./logo192.png";

export default function DialogsSearch () {
  return(
    <div className={styles.styleSearchComponent}>
      <img className = {styles.logo} src = {logo} alt="Ошибка" />
      <input type="text" value= "Поиск" className={styles.styleSearch}/>
    </div>
  )
}