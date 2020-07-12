import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact={true}/> 
        <Route path="/about" component={About}/> 
        <Route  component={NotFound}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
