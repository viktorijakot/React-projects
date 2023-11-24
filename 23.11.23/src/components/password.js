import "./password.css";
import { useState } from "react";

export default function Password() {
  const everything =
    "ABCDEFGHIJKLMNOPRSTVWZabcdefghijklmnoprstvwz1234567890!@#$%^&*()_+=-{[}]:;~±§|/.,><";
  const noSymbols = "ABCDEFGHIJKLMNOPRSTVWZabcdefghijklmnoprstvwz12345678901234567890";
  const noNumbers =
    "ABCDEFGHIJKLMNOPRSTVWZabcdefghijklmnoprstvwz!@#$%^&*()_+=-{[}]:;~±§|/.,><";
  const letters = "ABCDEFGHIJKLMNOPRSTVWZabcdefghijklmnoprstvwz";
  const [password, setPassword] = useState({
    number: false,
    symbol: false,
    value: "",
  });

  const handleNumbers = () => {
    setPassword({ ...password, number: !password.number });
  };

  const handleSymbols = () => {
    setPassword({ ...password, symbol: !password.symbol });
  };

  let passwords = [];
  if (localStorage.getItem("data")) {
    passwords = JSON.parse(localStorage.getItem("data"));
  }

  const loop = (value, length, array) => {
    for (let i = 0; i < length; i++) {
      value += array.charAt(Math.floor(Math.random() * array.length));
    }
    return value;
  };

  const handleLength = (e) => {
    e.preventDefault();
    let valueValue = "";

    if (password.number && password.symbol) {
      valueValue = loop(valueValue, e.target[0].value, everything);
    } else if (password.number && !password.symbol) {
      valueValue = loop(valueValue, e.target[0].value, noSymbols);
    } else if (!password.number && password.symbol) {
      valueValue = loop(valueValue, e.target[0].value, noNumbers);
    } else {
      valueValue = loop(valueValue, e.target[0].value, letters);
    }

    setPassword({ ...password, value: valueValue });

    if (passwords.length < 10) {
      passwords[passwords.length] = valueValue;
    } else {
      passwords.shift();
      passwords[passwords.length] = valueValue;
    }
    localStorage.setItem("data", JSON.stringify(passwords));
  };

  return (
    <>
      <div className="container">
        <p>Generated password:</p>
        <div className="password">{password.value}</div>
        <form onSubmit={handleLength}>
          <div className="box">
            <label>
              Length
              <input
                className="length"
                type="number"
                name="length"
                max={50}
                min={1}
              />
            </label>
            <label>
              <input onChange={handleNumbers} type="checkbox" name="numbers" />
              Numbers
            </label>
            <label>
              <input onChange={handleSymbols} type="checkbox" name="symbols" />
              Symbols
            </label>
          </div>
          <div className="box2">
            <button type="submit">Generate</button>
          </div>
        </form>
        <div className="list">
          <p>10 last generated passwords:</p>
          {passwords.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </div>
      </div>
    </>
  );
}
