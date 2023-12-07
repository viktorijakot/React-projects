import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Create({ handleAddAnimal, animals }) {
  const [dataForm, setDataForm] = useState({
    name: "",
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // nelabai suprantu
    setDataForm((prevDataForm) => ({
      ...prevDataForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataForm.name.trim() && dataForm.weight.trim()) {
      const newAnimal = {
        id: uuidv4(),
        ...dataForm,
      };
      handleAddAnimal(newAnimal);
      setDataForm({
          name: '',
          weight: ''
      });
    }
  };
  return (
    <>
      <form className="boxCreate" onSubmit={handleSubmit}>
        <h5>Create a new animal</h5>
        <div className="setInfo">
          <input
            type="text"
            name="name"
            placeholder="Enter animal name"
            value={dataForm.name}
            onChange={handleChange}
          />
          <input
            type="number"
            name="weight"
            placeholder="Enter animal weight"
            value={dataForm.weight}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
