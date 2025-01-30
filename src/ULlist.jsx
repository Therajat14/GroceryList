
import ListItem from './listItem';
const List = ({ groceries, handleCheck, binHandler }) => {



    return (
        <ul className="grocery-list" >
            {groceries.map((grocery) => (
                <ListItem grocery={grocery} key={grocery.id} handleCheck={handleCheck} binHandler={binHandler} />
            ))}
        </ul>
    )
}

export default List;