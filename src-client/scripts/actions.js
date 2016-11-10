const Backbone = require('backbone');
// import STORE from '../store/store.js';
// import toastr from 'toastr'

const  UserModel  = require('./model-user.js')
const  {TodoModel, TodoCollection}  = require('./model-user.js')


const ACTIONS = {
  authenticateUser: function(userDataObj){
     console.log(userDataObj)
     let userMod = new UserModel()
     userMod.set(userDataObj)
     console.log(userMod)

    //FIX THE /users post route
    // (Nullpointer exception)
    userMod.save().then(function(serverRes){
      console.log(serverRes)
      location.hash = ""
    })
  },

  fetchTodoCollection: function(queryObj){
     const todoColl = new TodoCollection()
     todoColl.fetch().then(function(){
        STORE.setStore('currentTodos', todoColl.models )
     })

  },

  createNewTodo: function(newTodoData){
     const todoMod = new TodoModel()
     todoMod.set(newTodoData)
     return todoMod.save().then(function(){
        window.location.hash = "todos"
     })
  },


}

module.exports = ACTIONS
