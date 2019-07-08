import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//import { Redirect } from 'react-router-dom'

class Navbar extends Component {

  state = {
    loggedInUser: null
  }

  render() {
    return (
      <>
        <nav className="navbar myColor">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img src="http://assets.liverpool.com.mx/assets/web/logos/liverpool_logo.gif" alt="liverpool" width="190" height="53" />
            </a>
            <div className="navbar-burger burger" data-target="navbarBurger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarBurger" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" to='/'>Inicio</Link>
                <Link className="navbar-item" to='/articulos'>Lista de Articulos</Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
