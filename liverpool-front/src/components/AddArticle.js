import React, { Component } from 'react';
import axios from 'axios';

class AddArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { imagenUrl: "", nombre: "", precio: 0 };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const imagenUrl = this.state.imagenUrl;
        const nombre = this.state.nombre;
        const precio = this.state.precio;
        axios.post("http://localhost:5000/api/articulos", { imagenUrl, nombre, precio })
            .then(() => {
                // this.props.getData();
                this.setState({ imagenUrl: "", nombre: "", precio: 0 });
            })
            .catch(error => console.log(error))
    }

    handleFileUpload = async e => {
        const uploadData = new FormData()
        uploadData.append('imagenUrl', e.target.files[0])

        axios.post("http://localhost:5000/api/upload", uploadData)
            .then(res => {
                this.setState({
                    imagenUrl: res.data.secure_url
                })
            })
            .catch(err => { throw err })
        console.log(this.state.imagenUrl)
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="columns is-mobile loginb">
                <form className="column box is-three-quarters" onSubmit={this.handleFormSubmit}>
                    <div className="field " >
                        <label className="label">Imagen</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="file" name="imagenUrl" onChange={this.handleFileUpload} placeholder="name" />
                            <img src={this.state.imagenUrl} alt='articulo' width='100' />
                        </div>
                    </div>
                    <div className="field " >
                        <label className="label">Nombre</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChange(e)} />
                        </div>
                    </div>
                    <div className="field " >
                        <label className="label">Precio</label>
                        <div className="control ">
                            <input className="input is-two-thirds" type="number" name="precio" value={this.state.precio} onChange={e => this.handleChange(e)} />
                        </div>
                    </div>
                    <input className="input is-two-thirds button" type="submit" value="Enviar a BD" />
                </form>
            </div>
        )
    }
}

export default AddArticle;
