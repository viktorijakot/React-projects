import "./App.css";
import Create from "./Components/Create";
import List from "./Components/List";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [animals, setAnimals] = useState([
    {
      id: uuidv4(),
      name: "avis",
      weight: 30,
    },
    {
      id: uuidv4(),
      name: "antis",
      weight: 40,
    },
    { id: uuidv4(), name: "antilope", weight: 60 },
  ]);

  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem("animals"));
    if (storedAnimals) {
      setAnimals(storedAnimals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("animals", JSON.stringify(animals));
  }, [animals]);

  const handleAddAnimal = (newAnimal) => {
    setAnimals((prevAnimals) => [newAnimal, ...prevAnimals]);
  };

  const handleDeleteAnimal = (id) => {
    const updatedAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(updatedAnimals);
  };

  const handleEditAnimals= (animalToUpdate, edit) => {
    console.log(animalToUpdate, edit)
    const updatedAnimals = animals.map((animal) =>
      animal.id === animalToUpdate.id  && animal.id === edit.id? edit : animal
    );
    setAnimals(updatedAnimals);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Create animals={animals} handleAddAnimal={handleAddAnimal} />
        <List animals={animals} handleDeleteAnimal={handleDeleteAnimal} handleEditAnimals={handleEditAnimals}/>
      </header>
    </div>
  );
}

export default App;
