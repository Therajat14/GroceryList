
const AddItem = ({ newItem, setNewItem, addItem }) => {

    return (
        <form
            className='addItem'
            onSubmit={(event) => event.preventDefault()}
            required >
            <input type="text" placeholder="Add item" />
            <button
                type="submit"
                onClick={(e) => {
                    addItem(e);
                }}>Add</button>
        </form>
    );
}

export default AddItem; 