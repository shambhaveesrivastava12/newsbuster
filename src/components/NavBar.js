/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
// import {Link} from 'react-router-dom'


export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-2">
                    <a className="navbar-brand" href="#">NewsBuster</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a  className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                        {/* <li className="nav-item"><Link  className="nav-link" to="/business">Business</Link></li>
                        <li className="nav-item"><Link  className="nav-link" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link  className="nav-link" to="/general">General</Link></li>
                        <li className="nav-item"><Link  className="nav-link" to="/healthsciences">Healthsciences</Link></li>
                        <li className="nav-item"><Link  className="nav-link" to="/ports">Ports</Link></li>
                        <li className="nav-item"><Link  className="nav-link" to="/technology">Technology</Link></li> */}
                        </ul>
                    </div>
                </nav>
      </div>
    )
  }
}

export default NavBar
