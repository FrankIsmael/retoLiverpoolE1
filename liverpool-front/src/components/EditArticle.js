import React, { Component } from 'react';
import axios from 'axios';

class EditArticle extends Component {
  constructor(props){
    super(props);
    this.state = {
        imagenUrl: this.props.theArticle.imagenUrl, 
        nombre: this.props.theArticle.nombre,
        precio: this.props.theArticle.precio
    }
  }

    
  handleFormSubmit = (event) => {
    const imagenUrl = this.state.imagenUrl;
    const nombre = this.state.nombre;
    const precio = this.state.precio

    event.preventDefault();

    axios.put(`http://localhost:5000/api/articulos/${this.props.theArticle._id}`, { imagenUrl, nombre, precio })
    .then( () => {
        this.props.getTheArticle();
        // after submitting the form, redirect to '/Articles'
        this.props.history.push('/articulos');    
    })
    .catch( error => console.log(error) )
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

  handleChangeName = (event) => {  
    this.setState({
      nombre:event.target.value
    })
  }

  handleChangePrice = (event) => {  
    this.setState({
      precio:event.target.value
    })
  }

  render(){
    return (
      <div>
        <hr />
        <h3>Edit form</h3><br/>
        <form onSubmit={this.handleFormSubmit}>
          <img src={this.state.imagenUrl} alt='articulo' width='100' /> <br/>
          <label>Imagen:</label>
          <input type="file" name="imagenUrl" onChange={this.handleFileUpload}/>
          <label>Nombre:</label>
          <input type="text" name="nombre" value={this.state.nombre} onChange={e => this.handleChangeName(e)} />
          <label>Precio:</label>
          <input type="number" name="precio" value={this.state.precio} onChange={e => this.handleChangePrice(e)} />
          
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditArticle;