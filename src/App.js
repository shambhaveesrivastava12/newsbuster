import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <NavBar/>
        <News pageSize={5} country="in" category="general"/>
        <Switch>
          <Route path="/"><News pageSize={5} country="in" category="general"/></Route>
          <Route path="/business"><News pageSize={5} country="in" category="business"/></Route>
          <Route path="/entertainment"><News pageSize={5} country="in" category="entertainment"/></Route>
          <Route path="/general"><News pageSize={5} country="in" category="general"/></Route>
          <Route path="/healthsciences"><News pageSize={5} country="in" category="healthsciences"/></Route>
          <Route path="/ports"><News pageSize={5} country="in" category="ports"/></Route>
          <Route path="/technology"><News pageSize={5} country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App
