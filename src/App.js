import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
      <Router>
        <div className="App">
            <Nav />
            <Route path="/" />
            <Route path="/About" component={About}/>
            <Route path="/Shop" component={Shop}/>


        </div>
      </Router>
  );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App;
