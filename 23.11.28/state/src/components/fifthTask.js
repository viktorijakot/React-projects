import { useState } from "react";
export function Fifth() {
  const [squere, setSquere] = useState([]);

  const container = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    width: "100px",
    height: "40px",
    backgroundColor: "#0472ec",
    borderRadius: "5px",
    border: "1px solid grey",
    cursor: "pointer",
    color: "white",
    fontSize: "15px",
    fontWeight: "bolder",
  };

  const box2 = {
    display: "flex",
    gap: "5px",
    flexWrap: "wrap",
  };

  return (
    <div style={container}>
      <p>Fifth task</p>
      <div style={box}>
        <div style={box2}>
          {squere.map((el, index) => {
            return (
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "5px",
                  backgroundColor: el === "red" ? "red" : "blue",
                }}
                key={index}
              ></div>
            );
          })}
        </div>
        <button
          style={button}
          name="red"
          onClick={() => setSquere([...squere, "red"])}
        >
          Add Red
        </button>
        <button
          style={button}
          name="blue"
          onClick={() => setSquere([...squere, "blue"])}
        >
          Add Blue
        </button>
      </div>
    </div>
  );
}
