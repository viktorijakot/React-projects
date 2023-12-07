import { useState } from "react";
export default function List({
  animals,
  handleDeleteAnimal,
  handleEditAnimals,
}) {
  const [edit, setEdit] = useState({
    name: "",
    weight: "",
  });

  return (
    <>
      {animals.map((animal) => (
        <>
          <div key={animal.id} className="container">
            <div className="info">
               
              <p>
                Name: <span className="state">{animal.name}</span>
              </p>
              <p>
                Weight: <span className="state">{animal.weight}</span>
              </p>
            </div>
            <form
              className="box"
              onSubmit={(e) => {
                e.preventDefault();
                console.log(edit)
                handleEditAnimals(animal, edit);
              }}
            >
              <div className="setInfo">
                <input
                  type="text"
                  name="name"
                  placeholder="Change name"
                  onChange={(e)=> setEdit(prev => ({...prev, name: e.target.value, id: animal.id}))}
                />

                <input
                  type="number"
                  name="weight"
                  placeholder="Change weight"
                  onChange={(e)=> setEdit(prev => ({...prev, weight: e.target.value, id: animal.id}))}
                />
              </div>
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => handleDeleteAnimal(animal.id)}
              >
                Delete
              </button>
            </form>
          </div>
        </>
      ))}
    </>
  );
}
