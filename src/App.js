import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './components/NavBar'
import News from './components/News';


export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <News pageSize={5}/>
        
      </div>
    )
  }
}

export default App
