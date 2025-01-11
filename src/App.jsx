import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";


function App() {
  const [groceries, setGroceries] = useState([
    { id: 1, des: 'Milk', isBought: false },
    { id: 2, des: 'Bread', isBought: false },
    { id: 3, des: 'Eggs', isBought: false },
    { id: 4, des: 'Rice', isBought: false },
    { id: 5, des: 'Bananas', isBought: true },
    { id: 6, des: 'Tomatoes', isBought: false },
    { id: 7, des: 'Potatoes', isBought: false },
    { id: 8, des: 'Cheese', isBought: false },
    { id: 9, des: 'Butter', isBought: false },
    { id: 10, des: 'Onions', isBought: true },
  ]);

  const handleCheck = (id) => {
    console.log('handleCheck', id);
    const grocerylist = groceries.map((grocery) => {
      if (grocery.id === id) {
        return { ...grocery, isBought: !grocery.isBought };
      }
      return grocery;
    });

    setGroceries(grocerylist)



  }

  const binHandler = (id) => {
    const list = groceries.filter((grocery) => grocery.id !== id);
    setGroceries(list);
  }


  return (
    <div>
      {groceries.length ? ( // Check if there are items in the groceries list
        <ul>
          {groceries.map((grocery) => (
            <li key={grocery.id}
              style={{
                color: grocery.isBought ? '#555' : 'inherit',
                opacity: grocery.isBought ? 0.7 : 1,
              }}
            >
              <div className="items">
                <div className="item">
                  <input
                    type="checkbox"
                    checked={grocery.isBought}
                    onChange={() => handleCheck(grocery.id)}
                  />
                </div>
                <div>
                  <span
                    onClick={() => handleCheck(grocery.id)}
                    style={{ flexGrow: 1 }}
                  >
                    {grocery.des}
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
          ))}
        </ul>
      ) : (
        <h1>No Items in the List</h1> // Render this when the list is empty
      )}
    </div>
  );




}


// import { useState } from "react";

// function App() {

//   const [todoState, setTodoState] = useState([
//     { id: 1, title: "Buy Milk", isCompleted: false },
//     { id: 2, title: "Buy Bread", isCompleted: true },
//     { id: 3, title: "Buy Coffiee", isCompleted: true },
//     { id: 4, title: "Buy Flower", isCompleted: false }
//   ]);
//   function Addrandom() {
//     const randomId = Math.floor(Math.random() * 1000);
//     const randomTitle = "Random Title " + randomId;
//     const randomIsCompleted = Math.random() > 0.5;
//     const newTodo = { id: randomId, title: randomTitle, isCompleted: randomIsCompleted };
//     setTodoState([...todoState, newTodo]);
//   }

//   return (

//     <div>
//       <button onClick={Addrandom}>Add Random Todo</button>
//       {todoState.map((todo) => <TodoCreate key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.isCompleted} />)}  </div>
//   )

// }

// function TodoCreate(props) {
//   return (
//     <div id={props.key} style={{ backgroundColor: props.isCompleted ? "green" : "red" }}>
//       <h1>{props.id} : {props.title}</h1>
//     </div>
//   )
// }





// function CustomButton(props) {

//   function onClickhandler() {
//     props.setCount(props.count + 1);
//     console.log("Button Clicked");
//   }

//   return (
//     <button onClick={onClickhandler}> Count: {props.count}</button>

//   );
// }

export default App
