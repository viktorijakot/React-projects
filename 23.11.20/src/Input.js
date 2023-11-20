import "./Input.css";
import { useState } from "react";

export default function Input() {
  const [value, setValue] = useState();
  const [selected, setSelected] = useState()
  const names = ["Marija", "Andrius", "Tomas", "Viktorija", "Justina", "Laima", "Arvydas","Elena", "Dominyka", "Giedrius", "Justinas"];
 
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

  const selectEl = (e) => {
     return setSelected(e.target.text) 
   }

  return (
    <>
      <div className="container my-5">
        <input
          type="text"
          className="form-control"
          name="tekstas"
          placeholder="Įveskite vardą"
          onKeyUp={handleChange}
          value={selected}
        />

        <ul>
          {value
            ? value.map((el, i) => (
                <li key={i}>
                  <a href="#" onClick={selectEl}>{el}</a>
                </li>
              ))
            : value}
        </ul>
      </div>
    </>
  );
}
