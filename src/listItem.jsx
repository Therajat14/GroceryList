import { FaTrashAlt } from "react-icons/fa";


const ListItem = ({ grocery, handleCheck, binHandler }) => {

    return (
        <li key={grocery.id}
            style={{
                color: grocery.isBought ? '#555' : 'inherit',
                opacity: grocery.isBought ? 0.7 : 1,
            }}
        >
            <div className="items ">
                <div className="item  " >
                    <input
                        type="checkbox"
                        checked={grocery.isBought}
                        onChange={() => handleCheck(grocery.id)}
                    />
                </div>
                <div >
                    <span
                        onClick={() => handleCheck(grocery.id)}
                        style={{ flexGrow: 1 }}
                    >
                        {grocery.id + " :"}  {grocery.des}
                    </span>
                </div>
            </div>
            <FaTrashAlt
                onClick={() => binHandler(grocery.id)}
                style={{
                    color: grocery.isBought ? '#4caf50' : '#ff6b6b',
                    opacity: grocery.isBought ? 0.85 : 1,
                }}
            />
        </li>
    )
}

export default ListItem;



