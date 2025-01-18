import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import { useState } from 'react';

function Main() {

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

  return (
    <div className='mainContent'>
      <Header heading="Grocery list" />
      <App groceries={groceries} setGroceries={setGroceries} />
      <Footer length={groceries.length} />
    </div>
  );
}

createRoot(document.getElementById('root')).render(


  <Main />
)
