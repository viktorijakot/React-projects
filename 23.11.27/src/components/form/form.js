import styles from "./form.module.css";
import { useState } from "react";
export default function Form() {
  const [click, setClick] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setClick(true);
  };
  return (
    <form className={styles.form}>
      <div className={styles.inputBox} onClick={handleClick}>
        {!click ? (
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
        ) : (
          <div>
            <p className={styles.email}>Email address</p>
            <input
              className={styles.input}
              type="email"
              name="email"
              required
            />
          </div>
        )}
        {click && (
          <img
            className={styles.key}
            src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/104-512.png"
            title="smart key icons"
            alt="key"
          />
        )}
      </div>
      <button className={styles.button} onClick={handleClick}>
        Get Started ＞
      </button>
    </form>
  );
}
