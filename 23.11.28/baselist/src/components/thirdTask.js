export default function Third() {
  const dogs = ["šuo", "šunius", "Bobikas", "kudlius", "Šarikas", "avigalvis"];
  const container = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  };

  const boxes = {
    width: "100px",
    height: "100px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const boxes2 = {
    width: "100px",
    height: "100px",
    backgroundColor: "green",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
  };
  const container2 = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };
  return (
    <>
      <div style={container}>
        <p>Third task</p>
        <div style={container2}>
          {dogs.map((item, index) => {
            return (
              <div
                key={index}
                style={index % 2 === 0 && index !== 0 ? boxes : boxes2}
              >
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
