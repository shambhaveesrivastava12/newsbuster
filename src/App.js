import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import News from './components/News';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


export class App extends Component {
  render() {
    return (
      <div>
      {/* <Router> */}
        <NavBar/>
        <News pageSize={5} country="in" category="general"/>
        {/* <Switch>
          <Route exact path="/"><News pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/business"><News pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News pageSize={5} country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/healthsciences"><News pageSize={5} country="in" category="healthsciences"/></Route>
          <Route exact path="/ports"><News pageSize={5} country="in" category="ports"/></Route>
          <Route exact path="/technology"><News pageSize={5} country="in" category="technology"/></Route>
        </Switch>
        </Router> */}
      </div>
    )
  }
}

export default App
