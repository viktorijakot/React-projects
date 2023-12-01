import Header from "../header/header";
import styles from "./section1.module.css"
import Form from "../form/form";
export default function Section1({addCard}) {

  return (
    <>
      <div>
        <div className={styles.section1}>
        <img
          className={styles.background}
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/2afd33fe-8672-4faf-a236-68dd73380701/LT-en-20231120-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="movies"
        />
        <div className={styles.background2}>
          <Header addCard={addCard}/>
          <div className={styles.bigContainer}>
          <div className={styles.container}>
            <h1 className={styles.title}>Unlimited movies, TV shows, and more</h1>
            <p>Watch anywhere. Cancel anytime</p>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
           <Form/>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
