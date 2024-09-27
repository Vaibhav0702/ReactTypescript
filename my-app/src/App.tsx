import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import PersonDetails from './Components/PersonDetails';
import Teams from './Components/Teams';
import LogLevel from './Components/LogLevel';
import Parent from './Components/Parent';
import Child from './Components/Child';

function App() {

  const details = {
    name: "vaibhav",
    lastName: "Raj",
    age: 26
  }

  const IPL = [{
    team: "CSK",
    color: "Yellow"
  },
  {
    team: "RCB",
    color: "RED"
  },
  {
    team: "MI",
    color: "Blue"
  }
  ]


  return (
    <div className="App">
      <Home name="Vaibhav" age={20} isEligible={true} />
      ---------------------------------------------------------------------
      <PersonDetails details={details} />
      ---------------------------------------------------------------------
      <Teams IPL={IPL} />
      ---------------------------------------------------------------------

      <LogLevel status="Info" />

      ---------------------------------------------------------------------

      <Parent  children={<Child></Child>}  />

    </div>
  );
}

export default App;
