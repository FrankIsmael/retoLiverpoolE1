import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditArticle from './EditArticle';

class ArticleDetails extends Component {
  constructor(props){
      super(props);
      this.state = {};
  }

  componentDidMount(){
      this.getSingleArticle();
  }

  getSingleArticle = () => {
      const { params } = this.props.match;
      axios.get(`http://localhost:5000/api/articulos/${params.id}`)
      .then( responseFromApi =>{
          const theArticle = responseFromApi.data;
          this.setState(theArticle);
      })
      .catch((err)=>{
          console.log(err)
      })
  }

  renderEditForm = () => {
    if(!this.state.nombre){
      this.getSingleArticle();
    } else {
    //                                                    {...props} => so we can have 'this.props.history' in Edit.js
    //                                                                                          ^
    //                                                                                          |
      return <EditArticle theArticle={this.state} getTheArticle={this.getSingleArticle} {...this.props} />
        
    }
  }

  deleteArticle = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/articulos/${params.id}`)
    .then( () =>{
        this.props.history.push('/articulos'); // !!!         
    })
    .catch((err)=>{
        console.log(err)
    })
  }

  render(){
    return(
      <div>
        <img src={this.state.imagenUrl} alt='articulo' width='100' />
        <h2>{this.state.nombre}</h2>
        <h2>${this.state.precio}</h2>
        <div>{this.renderEditForm()} </div> 
        <button onClick={() => this.deleteArticle()}>Eliminar Articulo</button>
        <br/>
        <Link to={'/articulos'}>Regresar a lista de articulos</Link>
      </div>
    )
  }
}

export default ArticleDetails;