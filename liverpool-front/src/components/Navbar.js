import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {

  state = {
    loggedInUser: null
  }

  render() {
    return (
      <>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigaton">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/2c/b6/4f/2cb64f0f-8ad9-0642-06ca-8445e86dc4e6/AppIcon-0-1x_U007emarketing-0-0-85-220-0-4.png/246x0w.jpg" alt="liverpool" width="100" height="100" />
            </Link>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBurger" href="#">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBurger" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" to="/">Inicio</Link>
                <Link className="navbar-item" to="/articulos">Lista de Articulos</Link>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar