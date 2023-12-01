import styles from "./footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>
            <a href="" className={styles.links}>
              Questions? Contact us.
            </a>
          </p>
          <div className={styles.list}>
            <ul className={styles.listUl}>
              <li>
                <a href="" className={styles.links}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Privacy
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Speed Test
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Ad Choices
                </a>
              </li>
            </ul>
            <ul className={styles.listUl}>
              <li>
                <a href="" className={styles.links}>
                  Help Center
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Jobs
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Cookie Preferences
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Legal Guarantee
                </a>
              </li>
            </ul>
            <ul className={styles.listUl}> 
              <li>
                <a href="" className={styles.links}>
                  Account
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Ways to Watch
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Corporate Information
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Legal Notices
                </a>
              </li>
            </ul>
            <ul className={styles.listUl}>
              <li>
                <a href="" className={styles.links}>
                  Media Center
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="" className={styles.links}>
                  Only on Netflix
                </a>
              </li>
            </ul>
          </div>
          <select className={styles.select}>
            <option>English</option>
            <option>Lithuanian</option>
          </select>
          <p>Netflix Lithuania</p>
        </div>
      </footer>
    </>
  );
}
