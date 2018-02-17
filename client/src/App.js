import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Title from './components/Title/Title';
import SearchAndResults from './pages/SearchAndResults';
import Saved from './pages/Saved';
import Footer from './components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header/>
          <div className="main">
            <Title/>
            <Route exact path="/" component={SearchAndResults}/>
            <Route exact path="/saved" component={Saved}/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;