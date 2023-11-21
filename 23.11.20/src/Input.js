import "./Input.css";
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState("");
  const names = [
    "Marija",
    "Andrius",
    "Tomas",
    "Viktorija",
    "Justina",
    "Laima",
    "Arvydas",
    "Elena",
    "Dominyka",
    "Giedrius",
    "Justinas",
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const filterNames = (names) => {
    return value
      ? names.filter((name) => name.toLowerCase().includes(value.toLowerCase()))
      : [];
  };

  return (
    <>
      <div className="container my-5">
        <input
          type="text"
          className="form-control"
          name="tekstas"
          placeholder="Įveskite vardą"
          onChange={handleChange}
          value={value}
        />

        <ul>
          {filterNames(names).map((el, i) => (
            <li key={i}>
              <a href="#" onClick={() => setValue(el)}>
                {el}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
