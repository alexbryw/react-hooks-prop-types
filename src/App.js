import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MoodToggler from './components/MoodToggler';
import Cart from './components/Cart';
// import './App.css';

function App() {
  return (
    <>
      <Cart />
      <Greeting name="Alex" excitement={4} />
      <Counter step={2} />
      <MoodToggler />
      <Counter/>
      <MoodToggler />

    </>
  );
}

export default App;
