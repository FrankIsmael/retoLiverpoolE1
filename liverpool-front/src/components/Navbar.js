import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {

  state = {
    loggedInUser: null
  }

  render() {
    return (
      <>
      <nav className="navbar is-primary" role="navigation" aria-label="main navigaton" style={{height:"6rem"}}>
          <div className="navbar-brand" style={{padding:"16px"}}>
              <figure className="image is-64x64 ">
                  <img src="https://res.cloudinary.com/dchiqx77k/image/upload/v1563346394/liverpol-gallery/liverpoolWhite.png.png" alt="liverpool"/>
              </figure>
            
              
            <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBurger" href="#">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>

          <div id="navbarBurger" className="navbar-menu">
            <div className="navbar-start">
  
                <Link className="navbar-item " to="/"><h1 className="is-size-3">Inicio</h1></Link>
                <Link className="navbar-item " to="/articulos"><h1 className="is-size-3">Lista de Articulos</h1></Link>
                          
            </div>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar