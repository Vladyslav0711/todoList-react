import React from 'react';
import './App.css';
import MyToDoes from "./Components/MyToDoes/MyToDoes";


function App(props) {
  debugger;
  return (
      <div>
        <MyToDoes state={props.state} store={props.store}/>
      </div>
  );
}

export default App;