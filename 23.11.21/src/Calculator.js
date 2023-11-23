import "./Calculator.css";
import { useState } from "react";

export default function Calculator() {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  // const [style, setStyle] = useState({
  //   color1: "rgb(0, 0, 0,.8)",
  //   color2: "rgb(0, 0, 0,.3)",
  //   color3:"rgb(0, 0, 0,.3)",
  //   status: false,
  // });

  // const changeColor = (e) => {
  //   style.status = !style.status;

  //   !style.status
  //     ? setStyle({...style, color2: "rgb(0, 0, 0,.3)", color3: "rgb(0, 0, 0,.3)" })
  //     : setStyle({...style, color2: "rgb(0, 0, 0,.1)", color3: "rgb(0, 0, 0,.1)"});
  // };

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    setCalc({
      ...calc,
      num:
        calc.num === 0 && value === 0
          ? "0"
          : calc.num % 1 === 0
          ? Number(calc.num + value)
          : calc.num + value,
      res: !calc.sign ? 0 : calc.res,
    });
    console.log(calc);
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerText;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
    console.log(calc.num, calc.res);
  };

  const equalClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (num, res, sign) => {
        return sign === "+"
          ? num + res
          : sign === "−"
          ? res - num
          : sign === "×"
          ? res * num
          : res / num;
      };
      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Error"
            : math(calc.num, calc.res, calc.sign),
        sign: "",
        num: 0,
      });
    }
    console.log(calc.num, calc.res);
  };

  const acClickHandler = () => {
    setCalc({ sign: "", num: 0, res: 0 });
  };
  return (
    <div className="calculator">
      <div className="result">
        {calc.num && calc.sign && calc.res
          ? calc.res + calc.sign + calc.num
          : calc.res && calc.sign
          ? calc.res + calc.sign
          : calc.num
          ? calc.num
          : calc.res}
      </div>
      <div className="row">
        <button
          className="ac"
          onClick={(e) => {
            acClickHandler(e);
          }}
        >
          AC
        </button>
      </div>
      <div className="row">
        <button
          className="number"
          onClick={(e) => {
            numClickHandler(e);
            // changeColor(e);
          }}
          // style={{ backgroundColor: style.color2 }}
        >
          7
        </button>
        <button
          className="number"
          onClick={(e) => {
            numClickHandler(e);
            // changeColor(e);
          }}
          // style={{ backgroundColor: style.color3 }}
        >
          8
        </button>
        <button className="number" onClick={numClickHandler}>
          9
        </button>
        <button className="symbol" onClick={signClickHandler}>
          ÷
        </button>
      </div>
      <div className="row">
        <button className="number" onClick={numClickHandler}>
          4
        </button>
        <button className="number" onClick={numClickHandler}>
          5
        </button>
        <button className="number" onClick={numClickHandler}>
          6
        </button>
        <button className="symbol" onClick={signClickHandler}>
          ×
        </button>
      </div>
      <div className="row">
        <button className="number" onClick={numClickHandler}>
          1
        </button>
        <button className="number" onClick={numClickHandler}>
          2
        </button>
        <button className="number" onClick={numClickHandler}>
          3
        </button>
        <button className="symbol" onClick={signClickHandler}>
          −
        </button>
      </div>
      <div className="row">
        <button className="number size" onClick={numClickHandler}>
          0
        </button>
        <button className="number" onClick={equalClickHandler}>
          =
        </button>
        <button className="symbol" onClick={signClickHandler}>
          +
        </button>
      </div>
    </div>
  );
}
