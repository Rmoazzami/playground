import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Footer from './Footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className = "page-container">
      <Router>
        <div className="App">
            <Nav />
            <Switch>
            <Route exact = {true}  path="/" component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Shop" component={Shop}/>
            </Switch>


        </div>
      </Router>
        <Footer/>

    </div>

  );
}

const Home = () => (
    <div>
        <h1>Home Page</h1>
    </div>
);

export default App;
