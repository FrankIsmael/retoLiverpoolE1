import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { inherits } from 'util';


class ArticleList extends Component {
    state = { listOfArticles: [] };

    getAllArticles = () => {
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

    render() {
        return (
            <>
                <div className="columns is-multiline is-mobile ">
                    {this.state.listOfArticles.map(article => {
                        return (
                            <div className="column is-half card" key={article._id}>
                                <Link to={`/articulos/${article._id}`}>
                                    <div className="card-image">
                                        <figure className="image is-128x128">
                                            <img src={article.imagenUrl} alt='articulo' width='100' />
                                        </figure>
                                    </div>
                                    <div class="content">
                                    <h2>{article.nombre}</h2>
                                    <h2>${article.precio}</h2>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }
}

export default ArticleList;

{/* 
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div> */}