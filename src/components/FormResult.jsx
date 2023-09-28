import styles from "./FormResult.module.css";

export function FormResult() {
  return (
    <div className={styles.formresult}>
      <label htmlFor="">ID</label>
      <input type="text" placeholder="123" />

      <label htmlFor="">Branch name</label>
      <input type="text" placeholder="Create table filter" />

      <div className={styles.task}></div>
      <div className={styles.copy}>
      <button>Copiar</button>
      </div>
      
    </div>
  );
}
