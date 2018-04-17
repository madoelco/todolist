const express = require('express')
const Router = express.Router()
const listController = require('./controllers/list.js')

//--------------------CRUD ROUTES------------------------

//CREATE
Router.post('/todolist', listController.post)
//READ
Router.get('/todolist/:id', listController.getOne)
Router.get('/todolist', listController.get)
//UPDATE
Router.put('/todolist/:id', listController.update)
//DELETE
Router.delete('/todolist/delete/:id', listController.deleteOne)


module.exports = Router