import React from 'react';

// Declarations using ES6 modules
//import { BrowserRouter, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Container from './components/Container/Container';
// Declarations using CommonJS modules
//const BrowserRouter = require("react-router-dom").BrowserRouter;
//const Route = require("react-router-dom").Route;
//const Link = require("react-router-dom").Link;import './App.css';
//import DlgContainer   from './components/OcsaDialog/DlgContainer';

function App() {

  return (
    <BrowserRouter basename="/GC2019">
        <Container />
    </BrowserRouter>
  );
}// End function App()

export default App;
