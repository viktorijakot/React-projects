import { useState } from "react";
export function Third() {
  const [number, setNumber] = useState(0)
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

  return (
    <div style={container}>
        <p>Third task</p>
      <div style={box}>
        <div>{number}</div>
        <button style={button} onClick={()=>setNumber(number+1)}>Plus 1</button>
        <button style={button} onClick={()=>setNumber(number-3)}>Minus 3</button>
      </div>
    </div>
  );
}