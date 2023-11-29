export default function Header() {
  const logo = {
    height: "25px",
  };

  const header = {
    display: "flex",
    justifyContent: "space-between",
    padding: "30px",
  };

  const select = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    height: "32px",
    width: "137px",
    paddingLeft: "10px",
    fontSize: "15px",
    fontWeight: "bolder",
    border: "1px solid grey",
    borderRadius: "5px",
  };
  const button = {
    backgroundColor: "#e50815",
    color: "white",
    border: "none",
    borderRadius: "5px",
    height: "32px",
    width: "72px",
    fontSize: "14px",
    fontWeight: "bolder",
  };

  const box = {
    display: "flex",
    gap: "10px",
  };
  return (
    <>
      <header style={header}>
        <img
          style={logo}
          src="https://cdn.worldvectorlogo.com/logos/netflix-4.svg"
        />
        <div style={box}>
          <select style={select}>
            <option>English</option>
            <option>Lithuanian</option>
          </select>
          <button style={button}>Sign In</button>
        </div>
      </header>
    </>
  );
}
