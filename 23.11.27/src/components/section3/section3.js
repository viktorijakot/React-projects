import styles from "./section3.module.css";
export default function Section3() {
  return (
  <>
    <section className={styles.section}>
      <div className={styles.container}>
        <div>
        <h1 className={styles.title}>Download your shows to watch offline</h1>
        <p>Save your favorites easily and always have something to watch</p>
        </div>
        <div className={styles.box}>
            <img className={styles.img} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt='movie'/>
            <div className={styles.ractangular}>
                <img className={styles.cover} src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="cover"/>
                <div className={styles.text}>
                    <h4>Stranger Things</h4>
                    <p className={styles.downloading}>Downloading...</p>
                </div>
                <div className={styles.loader}></div>
            </div>
        </div>
      </div>
    </section>
  </>
  );
}
