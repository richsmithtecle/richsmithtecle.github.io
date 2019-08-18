import React from 'react';
// import IconList from './IconList';
import Ball from './Ball';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Pick Four' numBalls={4} maxNum={10}/>
    </div>
    // <div className="App">
    //   <IconList />
    // </div>
  );
}

export default App;
