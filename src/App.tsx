import React, { MouseEventHandler, useState } from 'react';
import './assets/css/grid.css';
import './assets/css/base.css';
import './assets/css/App.css';
import Main from './features/main/Main';

function App() {

  return (
    <div className="App" >

      <div className="main">
        <Main />
      </div>
      <footer className="footer">
        footer
      </footer>


    </div>
  );
}





export default App;
