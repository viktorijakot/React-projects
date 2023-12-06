export default function Create({ setCreate, setInfo, info, addMessage }) {
  const add = (e) => {
    e.preventDefault();
    if(e.target.firstChild.value.length === 0) {
      addMessage("danger", "Name and surname are missing");
      return 
    }
    console.log(e.target.firstChild.value.length)
    let firstName = e.target.firstChild.value.split(" ")[0];
    let lastName = e.target.firstChild.value.split(" ")[1];
    setCreate({
      name: firstName,
      surname: lastName,
      funds: 0
    });
  }
  return (
    <>
      <div className="card">
        <h2>New bank account</h2>
        <label>Enter person's name and surname</label>
        <form className="flex" onSubmit={add}>
          <input className="input" type="text" name="surname"  />
          <button type="submit" className="button">
            ADD
          </button>
        </form>
      </div>
    </>
  );
}
