import styles from './section4.module.css'
export default function Section4 () {
    return (
        <>
          <section className={styles.section}>
            <div className={styles.container}>
              <div>
              <h1 className={styles.title}>Watch everywhere</h1>
              <p>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
              </p>
              </div>
              <div className={styles.box}>
                <img
                  className={styles.img}
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                  alt="devices"
                />
                <video
                  className={styles.video}
                  controls=""
                  autoPlay=""
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                  type="video/x-m4v"
                ></video>
              </div>
            </div>
          </section>
        </>
    )
}