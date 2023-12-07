export default function Create({ setCreate, addMessage, account }) {
  const add = (e) => {
    e.preventDefault();
   if (/[0-9]/.test(e.target.firstChild.value)) {
      addMessage("danger", "Text should not have numbers");
      return
    } else if(e.target.firstChild.value.length === 0) {
      addMessage("danger", "Name and surname are missing");
      return 
    } else if (e.target.firstChild.value.split(" ")[1] === undefined || e.target.firstChild.value.split(" ")[1] === ""){
      addMessage("danger", "Name or surname is missing");
      return 
    } 

    let firstName = e.target.firstChild.value.split(" ")[0];
    let lastName = e.target.firstChild.value.split(" ")[1];
    setCreate({
      name: firstName.charAt(0).toUpperCase() + firstName.slice(1),
      surname: lastName.charAt(0).toUpperCase() + lastName.slice(1),
      funds: 0,
      accountNumber: (Math.random() * 1000000000000000000) + 1
    });
  }
  return (
    <>
      <div className="card">
        <h2>New bank account</h2>
        <label>Enter person's name and surname</label>
        <form className="flex" onSubmit={add}>
          <input className="input" type="text" name="surname" placeholder="Michael Scott"/>
          <button type="submit" className="button">
            ADD
          </button>
        </form>
      </div>
    </>
  );
}
