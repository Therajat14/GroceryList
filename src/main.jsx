import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import { useState } from 'react';
import AddItem from './additem.jsx';
import SearchBar from './searchBar.jsx';
import { use } from 'react';


function Main() {
  console.log('Main component');


  const [groceries, setGroceries] = useState([
    { id: 1, des: 'milk', isBought: false },
    { id: 2, des: 'bread', isBought: false },
    { id: 3, des: 'eggs (large)', isBought: false },
    { id: 4, des: 'rice', isBought: false },
    { id: 5, des: 'Banannas', isBought: true },
    { id: 6, des: 'toamtoes', isBought: false },
    { id: 7, des: 'cheese cheddar', isBought: false },
    { id: 8, des: 'butter (unsalted)', isBought: true },
    { id: 9, des: 'onions (red)', isBought: false },
    { id: 10, des: 'Cucumber', isBought: false },
    { id: 11, des: 'potatoe', isBought: false },
    { id: 12, des: 'lettuce (fresh)', isBought: false },
    { id: 13, des: 'spinach', isBought: true },
    { id: 14, des: 'chiken', isBought: false },
    { id: 15, des: 'orange juice', isBought: false },

  ]);

  const [search, setSearch] = useState('')

  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = groceries.length ? groceries[groceries.length - 1].id + 1 : 1;
    const newGrocery = {
      id: id,
      des: newItem,
      isBought: false
    }
    console.log(id);
    console.log(newGrocery);
    setGroceries([...groceries, newGrocery])
    console.log(groceries)

  }

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

  const handelSubmit = (e) => {
    e.preventDefault()
    if (AddItem === '') return;
    console.log("Submitted")
    setNewItem('');
    addItem("hii");
  }

  return (
    <div className='mainContent'>
      <Header heading="Grocery list" />
      <AddItem newItem={newItem} setNewItem={setNewItem} handelSubmit={handelSubmit} />
      <SearchBar search={search} setSearch={setSearch} />

      <App
        groceries={groceries.filter(grocery => grocery.des.toLowerCase().includes(search.toLowerCase()))}
        setGroceries={setGroceries}
        handleCheck={handleCheck}
        binHandler={binHandler} />

      <Footer length={groceries.length} />

    </div>
  );
}

createRoot(document.getElementById('root')).render(


  <Main />

)
