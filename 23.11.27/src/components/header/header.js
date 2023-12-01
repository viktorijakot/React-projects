import styles from './header.module.css'

export default function Header({addCard}) {
  return (
    <>
      <header className={styles.header}>
        <img
          className={styles.logo}
          src="https://cdn.worldvectorlogo.com/logos/netflix-4.svg"
          alt="logo"
        />
        <div className={styles.box}>
          <select className={styles.select}>
            <option>English</option>
            <option>Lithuanian</option>
          </select>
          <button className={styles.butt} onClick={()=> addCard()}>Sign In</button>
        </div>
      </header>
    </>
  );
}
