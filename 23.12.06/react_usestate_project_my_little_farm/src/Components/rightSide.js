import { useEffect, useState } from "react";
export default function Right({
  click,
  editKarve,
  setClickAvis,
  setEditAvis,
  clickAvis,
  clickKarve
}) {
  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const avys = [];

  const handleAvysLength = (array) => {
    for (let i = 0; i < rand(5, 20); i++) {
      array.push(
        "A" +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9) +
          rand(0, 9)
      );
    }
    return array;
  };

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    handleAvysLength(avys);
    setAnimals(avys);
  }, [click]);

  useEffect(() => {
    localStorage.setItem("avys", JSON.stringify(avys));
  }, [avys]);

  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem("avys"));
    if (storedAnimals) {
      setAnimals(storedAnimals);
    }
  }, []);

  useEffect(() => {
    setAnimals((prev) => [...prev, editKarve]);
    console.log(animals)
  }, [clickKarve]);

  const handleClick = (e) => {
    e.preventDefault()
    setEditAvis(e.target.id);
    setClickAvis(!clickAvis);
    setAnimals(animals.filter((animal) => animal !== e.target.id));
  };

  return (
    <>
      <div className="containerLeft">
        <p>Avys</p>
        {animals &&
          animals.map((animal, index) => (
            <div key={index} className="box">
              {animal !== null && (
                <div id={animal} className="karve" onClick={handleClick}>
                  {animal}
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
