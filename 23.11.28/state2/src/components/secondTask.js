import { useState, useEffect } from "react";
export default function Second() {
  const [squere, setSquere] = useState([]);
  const [number, setNumber] = useState(false);
  const container = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
  };
  const box = {
    width: "300px",
    height: "350px",
    border: "1px solid grey",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    alignItems: "center",
  };

  useEffect(() => {}, [number]);

  return (
    <>
      <div style={container}>
        <p>Second Task</p>
        <div style={box}>
          {squere.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "black",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  onClick={() => {
                    squere.splice(index, 1, squere[index] + 1);
                    setNumber(!number);
                  }}
                >
                  +
                </span>
                {item}
              </div>
            );
          })}
        </div>
        <button onClick={() => setSquere([...squere, 0])}>Pridėti</button>
      </div>
    </>
  );
}
