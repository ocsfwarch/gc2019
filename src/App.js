import React from 'react';

// Declarations using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";

// Declarations using CommonJS modules
//const BrowserRouter = require("react-router-dom").BrowserRouter;
//const Route = require("react-router-dom").Route;
//const Link = require("react-router-dom").Link;import './App.css';

import Container_flex from './components/Container_flex';
import DlgContainer   from './components/OcsaDialog/DlgContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Route path='/' exact component={Container_flex} />
        <Route path='/comments'  component={DlgContainer} />
      </div>
    </BrowserRouter>
  );
}// End function App()

export default App;
