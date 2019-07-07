const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const Articulo = require('../models/articulos')

// POST => para crear un nuevo articulo
router.post('/articulos', (req, res, next)=>{
 
  Articulo.create({
    imagen: req.body.imagen,
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

module.exports = router