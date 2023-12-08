import "./App.css";
import { useState, useEffect } from "react";
import Animals from "./Components/animals";

function App() {
  const [click, setClick] = useState(false);
  const [karves, setKarves] = useState([]);
  const [avys, setAvys] = useState([]);

  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const arrayKarves = [];
  const arrayAvys = [];
  const k = "K";
  const a = "A";

  const handleAnimalsLength = (array, letter) => {
    for (let i = 0; i < rand(5, 20); i++) {
      array.push(
        letter +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9)
      );
    }
    return array;
  };

  const handleClick = () => {
    handleAnimalsLength(arrayKarves, k);
    handleAnimalsLength(arrayAvys, a);
    setKarves(arrayKarves);
    setAvys(arrayAvys);
    setClick(true);
  };

  useEffect(() => {
    if (click) {
      localStorage.setItem("karves", JSON.stringify(karves));
      localStorage.setItem("avys", JSON.stringify(avys));
      setClick(false);
    } else {
      const storedKarves = JSON.parse(localStorage.getItem("karves"));
      const storedAvys = JSON.parse(localStorage.getItem("avys"));

      if (storedKarves || storedAvys) {
        setKarves(storedKarves);
        setAvys(storedAvys);
      }
    }
  }, [click]);

  return (
    <div className="App">
      <header className="App-header">
        <Animals
          karves={karves}
          avys={avys}
          setKarves={setKarves}
          setAvys={setAvys}
          setClick={setClick}
          click={click}
        />
        <button type="button" onClick={handleClick}>
          Į ganyklą
        </button>
      </header>
    </div>
  );
}

export default App;
