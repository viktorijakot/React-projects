export default function Second() {
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
      backgroundColor: "green",
      color: "white",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%'
    };
    const container2 = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
    return (
      <>
        <div style={container}>
          <p>Second task</p>
          <div style={container2}>
            {dogs.sort((a,b) => b.length - a.length).map((item, index) => {
              return (
                <div key={index} style={boxes}>
                  <p>{item}</p>
                  <p>{index + 1}</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  