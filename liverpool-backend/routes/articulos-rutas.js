const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Articulo = require('../models/articulos')

// POST => para crear un nuevo articulo
router.post('/articulos', (req, res, next)=>{
 
  Articulo.create({
    imagenUrl: req.body.imagenUrl,
    nombre: req.body.nombre,
    precio: req.body.precio
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET => todos los articulos
router.get('/articulos', (req, res, next) => {
  Articulo.find()
    .then(todosArticulos => {
      res.json(todosArticulos);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET => obtener un articulo especifico
router.get('/articulos/:id', (req, res, next) => {
  Articulo.findById(req.params.id)
    .then(articulo => {
      res.json(articulo);
    })
    .catch(err => {
      res.json(err);
    })
});

// PUT => Actualizar un articulo especifico
router.put('/articulos/:id', (req, res, next)=>{
  
  Articulo.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.json({ message: `Articulo ${req.params.id} fue actualizado exitosamente.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE  => Eliminar un articulo 
router.delete('/articulos/:id', (req, res, next)=>{

  Articulo.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Articulo ${req.params.id} fue eliminado exitosamente.` });
    })
    .catch( err => {
      res.json(err);
    })
})


module.exports = router