import React from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form className={styles.form}>
      <label className={styles.label} htmlFor="name">
        Name
      </label>
      <input className={styles.input} type="text" id="name" />
      <label className={styles.label} htmlFor="password">
        Password
      </label>
      <input className={styles.input} type="text" id="password" />
      <button className={styles.submit}>Submit</button>
    </form>
  );
}

export default LoginForm;
