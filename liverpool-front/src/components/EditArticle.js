import React, { Component } from 'react';
import axios from 'axios';
import AwesomeComponent from './spinner';

class EditArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenUrl: this.props.theArticle.imagenUrl,
      nombre: this.props.theArticle.nombre,
      precio: this.props.theArticle.precio,
      loading: false
    }
  }


  handleFormSubmit = (event) => {
    const imagenUrl = this.state.imagenUrl;
    const nombre = this.state.nombre;
    const precio = this.state.precio

    event.preventDefault();

    axios.put(`http://localhost:5000/api/articulos/${this.props.theArticle._id}`, { imagenUrl, nombre, precio })
      .then(() => {
        this.props.getTheArticle();
        // after submitting the form, redirect to '/Articles'
        this.props.history.push('/articulos');
      })
      .catch(error => console.log(error))
  }

  deleteArticle = () => {
    const { params } = this.props.match;
    axios.delete(`http://localhost:5000/api/articulos/${params.id}`)
      .then(() => {
        this.props.history.push('/articulos'); // !!!         
      })
      .catch((err) => {
        console.log(err)
      })
  }

  handleFileUpload = async e => {
    const uploadData = new FormData()
    uploadData.append('imagenUrl', e.target.files[0])

    this.setState({ loading: true })

    axios.post("http://localhost:5000/api/upload", uploadData)
      .then(res => {
        this.setState({
          imagenUrl: res.data.secure_url,
          loading: false
        })
      })
      .catch(err => { throw err })
    console.log(this.state.imagenUrl)
  }

  handleChangeName = (event) => {
    this.setState({
      nombre: event.target.value
    })
  }

  handleChangePrice = (event) => {
    this.setState({
      precio: event.target.value
    })
  }

  render() {
    return (


      <div className="column is-12">
        <div className="columns is-centered">
          <form className="box column is-half" onSubmit={this.handleFormSubmit}>
            <div className="field column" >
              <label className="label column is-size-4">Imagen</label>
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
              {this.state.loading ? <AwesomeComponent /> :
                <img src={this.state.imagenUrl} alt='articulo' width='100' />
              }


            </div>
            <div className="field column is-centered" >
              <label className="label is-size-4">Nombre</label>
              <div className="control columns is-centered">
                <input className="input column is-6 is-centered is-size-4" type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChangeName(e)} />
              </div>
            </div>
            <div className="field" >
              <label className="label is-size-4">Precio</label>
              <div className="control columns is-centered">
                <input className="input column is-6 is-centered is-size-4" type="number" name="precio" value={this.state.precio} onChange={e => this.handleChangePrice(e)} />
              </div>
            </div>
            <div className="buttons column is-centered">
              <input className="input button column is-info is-3 is-size-4" type="submit" value="Editar" />
              <input className="input button column is-danger is-3 is-size-4" placeholder="Eliminar" onClick={() => this.deleteArticle()} />
            </div>
          </form>
        </div>
      </div>


    )
  }
}

export default EditArticle;