import { useState } from "react";
export function Second() {
  const [shape, setShape] = useState(false);
  const [number, setNumber] = useState('')
  const container = {
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center'
  };
  const box = {
    width: "300px",
    height: "300px",
    border: "1px solid grey",
    borderRadius: "5px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  };
  const circle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    backgroundColor: "red",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    color:'white'
  };
  const squere = {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    backgroundColor: "green",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: 'center',
    color:'white'
  };
const button = {
    width: '100px',
    height: '40px',
    backgroundColor: '#0472ec',
    borderRadius: '5px',
    border: '1px solid grey',
    cursor: 'pointer',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bolder',
}
const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const handleRandom = () => {
setNumber(rand(5,25))
}
  return (
    <div style={container}>
        <p>Second task</p>
      <div style={box}>
        <div style={shape ? squere : circle}>{number}</div>
        <button style={button} onClick={() => setShape(!shape)}>Change</button>
        <button style={button} onClick={handleRandom}>Random</button>
      </div>
    </div>
  );
}
