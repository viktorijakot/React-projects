import { useState } from "react";
export function Fourth() {
  const [squere, setSquere] = useState([])
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
const shape = {
    width: '20px',
    height: '20px',
    backgroundColor: 'blue',
    marginLeft: '5px'
}
const box2 = {
    display: 'flex',
    gap: '5px',
    flexWrap: 'wrap'
}


  return (
    <div style={container}>
        <p>Fourth task</p>
      <div style={box}>
        <div style={box2}>
        {squere.map((el,index) => {
          return <div style={shape} key={index}>{el}</div>
        })}
        </div>
        <button style={button} onClick={() => setSquere([...squere, ''])}>Add</button>
      </div>
    </div>
  );
}