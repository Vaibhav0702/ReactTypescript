import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
        <Home  name="Vaibhav" age={20} isEligible={true} />
    </div>
  );
}

export default App;
