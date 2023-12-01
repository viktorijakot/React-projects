import { useState, useEffect } from "react";
import styles from "./section6.module.css";
import Form from "../form/form";
export default function Section6() {
  const questions = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      answer2:
        "You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does it cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts.",
      answer2: null,
    },
    {
      question: "Where I can watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      answer2: null,
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      answer2: null,
    },
    {
      question: "What can I watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      answer2: null,
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.",
      answer2:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
    {
      question: "Why am I seeing this language?",
      answer: "Your browser preferences determine the language shown here.",
      answer2: null,
    },
  ];
  const [answer, setAnswer] = useState(false);
  const [number, setNumber] = useState(null);
  
  useEffect(() => {
setAnswer(true)
  },[number])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <ul className={styles.list}>
            {questions.map((question, index) => {
              return (
                <>
                  <li
                    key={index}
                    className={styles.question}
                    onClick={(e) => {
                      setAnswer(!answer);
                      setNumber(questions[index].question);
                      console.log(questions[index].question)
                    }}
                  >
                    {question.question} <span className={styles.plus}>{answer && number === question.question ? '✕' : '+'}</span>
                  </li>
                  {answer && number === question.question && (
                    <>
                      <li key={index} className={styles.answers}>
                        {questions.at(index).answer} <span>{questions.at(index).answer2 && questions.at(index).answer2}</span>
                      </li>
                    </>
                  )}
                </>
              );
            })}
          </ul>
          <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
        </div>
        <div className={styles.form}>
        <Form/>
        </div>
      </section>
    </>
  );
}
