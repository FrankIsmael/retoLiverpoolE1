import React, { Component } from 'react'
//import { Redirect } from 'react-router-dom'

class Navbar extends Component {

  state = {
    loggedInUser: null
  }

  render() {
      return (
        <>
          <nav className="navbar is-transparent">
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
                <a className="navbar-item" href="/">
                  Home
                </a>

              </div>
              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="buttons">
                    <a className="button is-primary" href="/signup">
                      <strong>Sign up</strong>
                    </a>
                    <a className="button is-light" href="/login">
                      Log in
                  </a>
                  </div>

                </div>
              </div>
            </div>
          </nav>
        </>
      )
    } 
}

export default Navbar
