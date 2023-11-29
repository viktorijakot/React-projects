import { useState } from "react";
export default function First() {
    const [tree, setTree] = useState({
        azuolas: "",
        berzas: "",
        uosis: ""
    })
  const container = {
    display: "flex",
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: "center",
    marginTop: "30px",
  };
  const green = {
    width: "250px",
    height: "350px",
    backgroundColor: "green",
    border: "1px solid grey",
    display:'flex',
    justifyContent:'space-evenly',
    alignItems: 'center'
  };
  const box = {
    width: "250px",
    display:'flex',
    justifyContent:'space-evenly'
  }
  const treeOne = {
    width: '50px',
    height: '50px',
    backgroundColor: 'blue',
    color: 'white',
    textAlign: 'center',

  }
  const treeTwo = {
    width: '50px',
    height: '50px',
    color: 'white',
    textAlign: 'center',

  }
  return (
    <>
      <div style={container}>
        <p>First task</p>
        <div style={green}>
            <div style={tree.azuolas === 'azuolas' ? treeOne : treeTwo}>{tree.azuolas}</div>
            <div style={tree.berzas === 'berzas' ? treeOne : treeTwo}>{tree.berzas}</div>
            <div style={tree.uosis === 'uosis' ? treeOne : treeTwo}>{tree.uosis}</div>
        </div>
        <div style={box}>
            <button name="azuolas" onClick={(e)=>setTree({...tree,azuolas: e.target.name})}>Ąžuolas</button>
            <button name="berzas" onClick={(e)=>setTree({...tree,berzas: e.target.name})}>Beržas</button>
            <button name="uosis" onClick={(e)=>setTree({...tree,uosis: e.target.name})}>Uosis</button>
        </div>
      </div>
    </>
  );
}
