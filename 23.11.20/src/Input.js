import "./Input.css";
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState();
  const names = ["Marija", "Andrius", "Tomas", "Viktorija", "Justina"];

  const handleChange = (e) => {
    // e.preventDefault()

    return setValue(
      e.target.value
        ? names.filter((name) =>
            name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : ""
    );

  };
  return (
    <>
      <div className="container my-5">
        <input
          type="text"
          className="form-control"
          name="tekstas"
          placeholder="Įveskite vardą"
          onKeyUp={handleChange}
        />

        <ul>
          {value
            ? value.map((el, i) => (
                <li key={i}>
                  <a href="#">{el}</a>
                </li>
              ))
            : value}
        </ul>
      </div>
    </>
  );
}
