import { useState } from "react";
import { useEffect } from "react";
export default function Left({
  click,
  setClickKarve,
  clickKarve,
  setEditKarve,
  clickAvis,
  editAvis,
}) {
  const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const karves = [];

  const handleKarvesLength = (array) => {
    for (let i = 0; i < rand(5, 20); i++) {
      array.push(
        "K" +
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
    handleKarvesLength(karves);
  }, [click]);

  useEffect(() => {
    localStorage.setItem("karves", JSON.stringify(karves));
  }, [karves]);

  useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem("karves"));
    if (storedAnimals) {
      setAnimals(storedAnimals);
    }
  }, []);

  const handleClick = (e) => {
    e.preventDefault()
    setEditKarve(e.target.id);
    setClickKarve(!clickKarve);
    setAnimals(animals.filter((animal) => animal !== e.target.id));
  };

  useEffect(() => {
    setAnimals((prev) => [...prev, editAvis]);
    console.log(animals)
  }, [clickAvis]);
  return (
    <>
      <div className="containerLeft">
        <p>Karvės</p>
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
