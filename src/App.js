import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MoodToggler from './components/MoodToggler';
import Cart from './components/Cart';
import AddFiveCounter from './components/AddFiveCounter'
import Name from './components/Name';
// import './App.css';

const items = [
  {id:1, name: "green te", price: 2.1, qty: 5},
  {id:2, name: "red te", price: 4.05, qty: 2},
  {id:3, name: "coffey", price: 5.006, qty: 4},
]

function App() {
  return (
    <>
      <Cart initialItems={items}/>
      <Name />
      <Greeting name="Alex" excitement={4} />
      <Counter step={2} />
      <MoodToggler />
      <AddFiveCounter />
    </>
  );
}

export default App;
