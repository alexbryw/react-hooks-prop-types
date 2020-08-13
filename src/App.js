import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MoodToggler from './components/MoodToggler';
import Cart from './components/Cart';
import AddFiveCounter from './components/AddFiveCounter'
import Name from './components/Name';
import ItemList from './components/ItemList';
import TitleCount from './components/TitleCount';
import ShowMouseHook from './components/ShowMouseHook';
import TimerHook from './components/TimerHook';
import DataFetch from './components/DataFetch';
import PropTypes from 'prop-types'
// import './App.css';

const items = [
  {id:1, name: "green te", price: 2.1, qty: 5},
  {id:2, name: "red te", price: 4.05, qty: 2},
  {id:3, name: "coffey", price: 5.006, qty: 4},
]

export const UserContext = React.createContext()

function App() {
  return (
    <>
      <UserContext.Provider value={"alex"}>
        <Cart initialItems={items}/>
        <DataFetch />
        <TimerHook />
        <ShowMouseHook />
        <TitleCount/>
        <ItemList/>
        <Name />
        <Greeting name="Axel" excitement={4} greetInfo={greetInfo} />
        <Counter step={2} />
        <MoodToggler />
        <AddFiveCounter />
      </UserContext.Provider>
    </>
  );
}

export default App;

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  excitement: PropTypes.number,
  greetInfo: PropTypes.shape({
    name: PropTypes.string,
    excitement: PropTypes.number
  })
}

const greetInfo = {
  name: 'Roger',
  excitement: 3
}
