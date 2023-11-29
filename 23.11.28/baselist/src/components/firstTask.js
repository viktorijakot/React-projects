export default function First() {
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
  const container2 = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px'
  }
  return (
    <>
      <div style={container}>
        <p>First task</p>
        <div style={container2}>
          {dogs.map((item, index) => {
            return (
              <div key={index} style={boxes}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
