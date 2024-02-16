import styles from "./TodoList.module.css";

function TaskItems() {
  return (
    <div className={styles.tasklist}>
      <ul>
        <li className={styles.listItem}>Happy</li>
        <li className={styles.listItem}>Meet Client at hotel d'Afrique</li>
        <li className={styles.listItem}>Play with Super stars</li>
        <li className={styles.listItem}>Night out with friends</li>
      </ul>
    </div>
  );
}

export default TaskItems;
