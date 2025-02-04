import { FaPlus } from "react-icons/fa";
const AddItem = ({ newItem, setNewItem, handelSubmit }) => {

    return (
        <form
            className='addItem1'
            onSubmit={handelSubmit}
            required >
            <label htmlFor="addItem1" className="addItem">
                <input
                    type="text"
                    placeholder="Add item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    required
                />
                <button type="submit"><FaPlus /></button>
            </label>
        </form>

    );
}

export default AddItem; 