export default function Delete({ remove, setRemove, setClear }) {

    if (null === remove) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modalCentered">
                <div className="modalContent">
                    <div className="modalClose">
                        <button type="button" className="btnClose" onClick={() => setRemove(null)}>x</button>
                    </div>
                    <div className="modalText">
                        <p>Are you sure you want to delete this account?</p>
                    </div>
                    <div className="modalButtons">
                        <button onClick={() => setRemove(null)} type="button" className="btn2">Cancel</button>
                        <button onClick={() => setClear(remove)} type="button" className="btn3">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}