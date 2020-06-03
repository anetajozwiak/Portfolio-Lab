import React from 'react';
// import logo from './logo.svg';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
       </Switch>
     </Router>
    </div>
  );
}


export default App;

