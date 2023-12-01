import "./App.css";
import Footer from "./components/footer/footer";
import Section1 from "./components/section1/section1";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import Section5 from "./components/section5/section5";
import Section6 from "./components/section6/section6";
import Card from "./components/card/card";
import { useState } from "react";

function App() {
  const[card, setCard] = useState(false)

  const addCard = () => {
    setCard(true);
  }

  const removeCard = () => {
    setCard(false);
  }
  return (
    <div className="background">
      <Section1 addCard={addCard}/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer/>
      {card && <Card removeCard={removeCard}/>}
    </div>
  );
}

export default App;
