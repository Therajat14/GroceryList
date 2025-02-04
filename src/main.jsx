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
    { id: 1, des: 'Milk', isBought: false },
    { id: 2, des: 'Bread', isBought: false },
    { id: 3, des: 'Eggs', isBought: false },
    { id: 4, des: 'Rice', isBought: false },

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
      <App groceries={groceries} setGroceries={setGroceries} handleCheck={handleCheck} binHandler={binHandler} />
      <Footer length={groceries.length} />

    </div>
  );
}

createRoot(document.getElementById('root')).render(


  <Main />

)
