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
                            {this.state.listOfArticles.map((article,i) => {
                                return (
                                    <div className="column is-3" key={i}>
                                        <div className="card has-equal-height" key={article._id}>
                                            <Link to={`/articulos/${article._id}`}>
                                                <div className="image-card">
                                                    <div className="image has-spacing image is-3by2">
                                                        <img src={article.imagenUrl} alt='articulo'/>
                                                    </div> 
                                                </div>
                                                <div className="card-content">
                                                    <h3 className="title">{article.nombre}</h3>
                                                    <h2 className="subtitle">${article.precio}</h2>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default ArticleList;
