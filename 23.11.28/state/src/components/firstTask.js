import { useState } from "react";
export function First() {
  const [shape, setShape] = useState(false);
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
  };
  const squere = {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    backgroundColor: "green",
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
    fontWeight: 'bolder'
}
  return (
    <div style={container}>
        <p>First task</p>
      <div style={box}>
        <div style={shape ? squere : circle}></div>
        <button style={button} onClick={() => setShape(!shape)}>Change</button>
      </div>
    </div>
  );
}
