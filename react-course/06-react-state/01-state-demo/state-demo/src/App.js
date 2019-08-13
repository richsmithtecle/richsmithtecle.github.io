import React from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import BrokenClick from './BrokenClick'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrokenClick clicked={false} />
    </div>

    // <div className="App">
    //   <Button />
    // </div>

    // <div className="App">
    //   <Rando maxNum={7}/>
    // </div>
  );
}

export default App;
