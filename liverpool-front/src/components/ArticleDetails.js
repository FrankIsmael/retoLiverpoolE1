import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditArticle from './EditArticle';

class ArticleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleArticle();
  }

  getSingleArticle = () => {
    const { params } = this.props.match;
    axios.get(`http://localhost:5000/api/articulos/${params.id}`)
      .then(responseFromApi => {
        const theArticle = responseFromApi.data;
        this.setState(theArticle);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderEditForm = () => {
    if (!this.state.nombre) {
      this.getSingleArticle();
    } else {
      //                                                    {...props} => so we can have 'this.props.history' in Edit.js
      //                                                                                          ^
      //                                                                                          |
      return <EditArticle theArticle={this.state} getTheArticle={this.getSingleArticle} {...this.props} />

    }
  }

  render() {
    return (
      <>
        <section className="section is-top">
          <div className="container">
            <div className="columns is-multiline">

              <div className="column is-12">
                <div className="columns is-centered">
                  <div className="column is-two-thirds has-text-centered has-spacing-bottom has-no-background">
                    <h2 className="title is-size-3 is-size-1-tablet">Productos</h2>
                    <div className="subtitle is-size-5 is-size-4-tablet"><p>Lista de productos de la base de datos</p></div>
                  </div>
                </div>
              </div>

              <div className="column is-12">
                <div className="columns is-centered">
                  <div className="card" >
                    <div className="image-card">
                      <div className="image image is-3by2">
                        <img src={this.state.imagenUrl} alt='articulo' />
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="title">{this.state.nombre}</h3>
                      <h2 className="subtitle">${this.state.precio}</h2>
                    </div>
                  </div>
                </div>
              </div>
             
                {this.renderEditForm()}
          
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default ArticleDetails;

/*
<div>
        <img src={this.state.imagenUrl} alt='articulo' width='100' />
        <h2>{this.state.nombre}</h2>
        <h2>${this.state.precio}</h2>
        <div>{this.renderEditForm()} </div>
        <br/>
        <Link to={'/articulos'}>Regresar a lista de articulos</Link>
      </div>
*/