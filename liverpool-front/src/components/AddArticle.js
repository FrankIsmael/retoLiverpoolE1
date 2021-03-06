import React, { Component } from 'react';
import axios from 'axios';
import AwesomeComponent from './spinner';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { imagenUrl: "", nombre: "", precio: 0, loading: false, img: 0 };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const imagenUrl = this.state.imagenUrl;
        const nombre = this.state.nombre;
        const precio = this.state.precio;
        axios.post("http://localhost:5000/api/articulos", { imagenUrl, nombre, precio })
            .then(() => {
                // this.props.getData();
                this.setState({ imagenUrl: "", nombre: "", precio: 0, loading: false, img: 0 });
            })
            .catch(error => console.log(error))
    }

    handleFileUpload = async e => {
        const uploadData = new FormData()
        uploadData.append('imagenUrl', e.target.files[0])

        this.setState({ loading: true })

        axios.post("http://localhost:5000/api/upload", uploadData)
            .then(res => {
                this.setState({
                    imagenUrl: res.data.secure_url,
                    loading: false,
                    img: 1
                })
            })
            .catch(err => { throw err })
        console.log(this.state.imagenUrl)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    checkingImg = () => {
        if (!this.state.img) {
            if (this.state.loading) {
                return <AwesomeComponent />
            } else {
                return <span className="icon">
                    <i className="fas fa-home"></i>
                </span>
            }
        } else {
            return <img src={this.state.imagenUrl} alt='articulo' width='100' />
        }
    }

    render() {
        return (
            <>
                <section className="section is-medium">
                    <div className="container is-fluid">
                        <div className="columns is-multiline is-mobile">
                            <div className="column is-12">
                                <div className="columns is-centered">
                                    <div className="column is-two-thirds has-text-centered has-spacing-bottom has-no-background">
                                        <h2 className="title is-size-3 is-size-2-tablet">Bienvenido</h2>
                                        <div className="subtitle is-size-3 is-size-3-tablet"><p>Agregar artículo</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                
                <div className="container is-fluid">
                    <div className="columns is-multiline is-mobile">
                        <div className="column is-12">
                            <div className="columns is-centered">
                                <form className="box column is-half" onSubmit={this.handleFormSubmit}>
                                    <div className="field " >
                                        <label className="label is-size-4">Imagen</label>
                                        <div className="field column is-centered">
                                            <div className="file is-primary column is-centered">
                                                <label className="file-label">
                                                    <input className="file-input column is-6 is-centered has-background-success" type="file" name="imagenUrl" onChange={this.handleFileUpload} placeholder="name" />
                                                    <span className="file-cta">
                                                        <span className="file-label is-size-4">Elige Archivo… </span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        {
                                            this.checkingImg()
                                        }
                                    </div>
                                    <div className="field column is-centered" >
                                        <label className="label is-size-4">Nombre</label>
                                        <div className="control columns is-centered">
                                            <input className="input column is-6 is-centered is-size-4" type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="field" >
                                        <label className="label is-size-4">Precio</label>
                                        <div className="control columns is-centered">
                                            <input className="input column is-6 is-centered is-size-4" type="number" name="precio" value={this.state.precio} onChange={e => this.handleChange(e)} />
                                        </div>
                                    </div>
                                    <div className="buttons column is-centered">
                                        <input className="input button column is-info is-4 is-size-4" type="submit" value="Enviar a BD" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
            </>
        )
    }
}

export default AddArticle;
