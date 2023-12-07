import { useState } from "react";
export default function List({
  account,
  setRemove,
  setEdit,
  edit,
  setUpdate,
  addMessage,
}) {
  const [add, setAdd] = useState(false);
  const [fund, setFund] = useState(0);

  const handleFunds = (e) => {
    e.preventDefault();
    // setEdit(null)
    if (fund <= 0) {
      addMessage("danger", "Amount should not be 0 or less");
      return;
    }

    if (add) {
      setUpdate({ ...edit, funds: edit.funds + fund });
    } else {
      setUpdate({ ...edit, funds: edit.funds - fund });
    }
  };

  return (
    <>
      <div className="list">
        <h2>Accounts</h2>
        <div>
          {account !== null && account.length !== 0 ? (
            account
              .sort((a, b) => {
                if (a.surname.toLowerCase() < b.surname.toLowerCase()) {
                  return -1;
                }
                if (a.surname.toLowerCase() > b.surname.toLowerCase()) {
                  return 1;
                }
                return 0;
              })
              .map((item) => (
                <form onSubmit={handleFunds} className="item" key={item.id}>
                  <li className="names">
                    <p className="font">{item.surname + " " + item.name}</p>
                    <div>
                      <button
                        type="button"
                        className="but1"
                        onClick={() => {
                          //   console.log(item);
                          setRemove(item);
                        }}
                      >
                        x
                      </button>
                    </div>
                  </li>
                  <div className="names1">
                    <p className="acc">LT{item.accountNumber}</p>
                    <strong className="strong">${item.funds}</strong>
                  </div>
                  <div className="flex">
                    <input
                      type="number"
                      name="funds"
                      className="input"
                      placeholder="Enter amount"
                    />
                    <div>
                      <button
                        type="submit"
                        className="but3"
                        onClick={(e) => {
                          setAdd((c) => (c = false));
                          setEdit(item);
                          setFund(+e.target.form[1].value);
                        }}
                      >
                        Reduce funds
                      </button>
                      <button
                        type="submit"
                        className="but2"
                        onClick={(e) => {
                          setAdd((c) => (c = true));
                          setEdit(item);
                          setFund(+e.target.form[1].value);
                        }}
                      >
                        Add funds
                      </button>
                    </div>
                  </div>
                </form>
              ))
          ) : (
            <>
            <p>There is no accounts yet ...</p>
            <p>You can create a <strong>new account</strong> there <strong>⇪</strong></p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
