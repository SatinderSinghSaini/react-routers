import React ,{Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="routed-component"></div>
          <Route exact path="/"><Home /></Route>
          <Route path="/contact"><Contact /></Route>
          <Route path="/about"><About /></Route>
        </div>
      </BrowserRouter>      
    );
  }
}

export default App;
