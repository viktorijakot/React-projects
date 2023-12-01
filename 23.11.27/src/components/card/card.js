import styles from "./card.module.css";
export default function Card({ removeCard }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.container}>
          <p className={styles.close} onClick={() => removeCard()}>
            ✕
          </p>
          <h1 className={styles.sign}>Sign In</h1>
          <form className={styles.form}>
            <input
              className={styles.input}
              type="email, number"
              placeholder="Email"
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
            />
            <button className={styles.button} onClick={(e) => {
              removeCard();
              e.preventDefault()
              }}>Sign in</button>
          </form>
        </div>
      </div>
    </>
  );
}
