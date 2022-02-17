const express = require('express');
const { model } = require('mongoose');
const router = express.Router();

//INCLUIR CONTROLADOR
const post = require('../../controllers/PostControllers/post.controller')

//OBTENER TODOS LOS POSTS
router.get('/', post.getPosts)

//OBTENER UN POST
router.get('/:id', post.getPost)

//CREAR UN POST
router.post('/', post.createPost)

//ACTUALIZAR UN POST
router.put('/:id', post.updatePost)

//ELIMINAR UN POST
router.delete('/:id', post.deletePost)

module.exports = router