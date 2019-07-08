import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class ArticleList extends Component {
      state = { listOfArticles: [] };

  getAllArticles = () =>{
    axios.get(`http://localhost:5000/api/articulos`)
    .then(responseFromApi => {
      this.setState({
        listOfArticles: responseFromApi.data
      })
    })
    .catch(err => { return err })
  }

  componentDidMount() {
    this.getAllArticles();
  }

  render(){
    return(
      <div>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfArticles.map( article => {
            return (
              <div key={article._id}>
                <Link to={`/articulos/${article._id}`}>
                <img src={article.imagenUrl} alt='articulo' width='100' />
                  <h2>{article.nombre}</h2>
                  <h1>${article.precio}</h1>
                </Link>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}

export default ArticleList;