import "./App.css";
import Left from "./Components/leftSide";
import Right from "./Components/rightSide";
import { useState, useEffect } from "react";

function App() {
  const [click, setClick] = useState(false);
  const [clickKarve, setClickKarve] = useState(false);
  const [editKarve, setEditKarve] = useState(null);
  const [clickAvis, setClickAvis] = useState(false);
  const [editAvis, setEditAvis] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Left
            click={click}
            setClickKarve={setClickKarve}
            setEditKarve={setEditKarve}
            clickKarve={clickKarve}
            clickAvis={clickAvis}
            editAvis={editAvis}
          />
          <Right
            click={click}
            clickKarve={clickKarve}
            editKarve={editKarve}
            setClickAvis={setClickAvis}
            setEditAvis={setEditAvis}
            clickAvis={clickAvis}
            editAvis={editAvis}
          />
        </div>
        <button type="button" onClick={(e) => {
          e.preventDefault()
          setClick(!click)}}>
          Į ganyklą
        </button>
      </header>
    </div>
  );
}

export default App;
