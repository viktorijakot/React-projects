export default function Fourth() {
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
          <p>Fourth task</p>
          <div style={container2}>
            {dogs.filter(dog => dog.charAt() !== dog.charAt().toUpperCase()).map((item, index) => {
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
  