import { FaPlus } from "react-icons/fa";
const AddItem = ({ newItem, setNewItem, addItem }) => {

    return (
        <form
            className='addItem1'
            onSubmit={(event) => event.preventDefault()}
            required >
            <label htmlFor="addItem1" className="addItem">
                <input
                    type="text"
                    placeholder="Add item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    required
                />
                <button onClick={addItem}><FaPlus /></button>
            </label>
        </form>

    );
}

export default AddItem; 