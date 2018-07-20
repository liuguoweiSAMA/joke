import React, { Component } from 'react';
//import logo from './logo.svg';
//import './style/App.css';
import {Section} from './section'
import '../assets/main.css'
import {Review} from './review.js'
import '../assets/iconfont.css'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
class App extends Component {
	
  render() {
    return (
    	<Router>
      <div className="App">
        <Route exact path='/' component={Section}></Route>	
         <Route  path='/review/:id' component={Review}></Route>	
      </div>
      </Router>
    );
  }
  
}

export default App;
