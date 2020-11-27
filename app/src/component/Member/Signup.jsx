import React from "react";
import "../../css/App.css";
import styles from "../../css/SignUp.module.css";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className={styles.wrapper}>
      <div className="block" className={styles.block}>
        <h2 className={styles.title}>Sign Up</h2>
        <form className={styles.form}>
          <div className={styles.inputbox}>
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" />
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="email">Password</label>
            <input type="password" name="passowrd" />
          </div>
          <button>Sign Up</button>
        </form>
        <div className={styles.login}>
          <span>Already have an account? </span>
          <Link to={"/login"}>Log in</Link>
        </div>
      </div>
    </div>
  );
}
