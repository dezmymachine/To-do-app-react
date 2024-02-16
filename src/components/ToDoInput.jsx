import styles from "./ToDoInput.module.css";
import React, { useState } from "react";

function AddTaskItem() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue;
  };

  return (
    <div className={styles.inputbox}>
      <input
        type="text"
        className={styles.typeTask}
        placeholder="What you want do..."
        onChange={handleChange}
      />
      <span className={styles.createBtn}>Create</span>
    </div>
  );
}

export default AddTaskItem;
