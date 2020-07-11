import React from 'react';
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact={true}/> 
        <Route path="/about" component={About}/> 
        <Route  component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
