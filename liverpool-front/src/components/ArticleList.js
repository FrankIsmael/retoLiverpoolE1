import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


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
