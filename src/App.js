import React from 'react';
import Calculator from './Calculator/Calculator';
import Header from './Header';
import './App.css';

function App() {
  return (
      <div className="App">
            <Header />
            <Calculator />
          <div id="footerCredit">
              <p>Made by <a href="allisonshill.github.io">allisonshill.github.io</a></p>
          </div>
      </div>
  );
}

export default App;
