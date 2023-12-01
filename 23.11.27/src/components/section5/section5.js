import styles from './section5.module.css'
export default function Section5 () {
    return (
        <>
          <section className={styles.section}>
            <div className={styles.container}>
              <div>
              <h1 className={styles.title}>Create profiles for kids</h1>
              <p>
              Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
              </p>
              </div>
              <div className={styles.box}>
                <img
                  className={styles.img}
                  src="https://occ-0-41-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
                  alt="kids"
                />
              </div>
            </div>
          </section>
          </>
    )
}