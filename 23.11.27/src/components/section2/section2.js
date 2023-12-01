import styles from "./section2.module.css";
export default function Section2() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div>
          <h1 className={styles.title}>Enjoy on Your TV</h1>
          <p>
            Watch on Smart TVs, Playstation, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
          </div>
          <div className={styles.box}>
            <img
              className={styles.img}
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="tv"
            />
            <video
              className={styles.video}
              controls=""
              autoPlay=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/x-m4v"
            ></video>
          </div>
        </div>
      </section>
    </>
  );
}
