export default function Fifth() {
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
      backgroundColor: "red",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
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
          <p>Fifth task</p>
          <div style={container2}>
            {dogs.map((item, index) => {
              return (
                <div
                  key={index}
                  style={item.length > 6 ? boxes2 : boxes}
                >
                  <p>{item.length}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
        }