import { useState, useEffect } from "react";
export default function Third() {
  let num = 0;
  const [number, setNumber] = useState(0);
  const container = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "30px",
  };
  const green = {
    width: "250px",
    height: "350px",
    border: "1px solid grey",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  };
  useEffect(() => {
    if (localStorage.getItem("data")) {
      setNumber(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  return (
    <>
      <div style={container}>
        <p>Third task</p>
        <div style={green}>{number}</div>
        <div>
          <button
            onClick={() => {
              let value = number + 1;
              setNumber(value);
              localStorage.setItem("data", JSON.stringify(value));
              console.log(num);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
}
