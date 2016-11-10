const Backbone = require('backbone')

const TodoModel = Backbone.Model.extend({
   url: "/todos",

   initialize: function(){

   }
})

const TodoCollection = Backbone.Collection.extend({
   model: TodoModel,
   url: "/todos",

   initialize: function(){

   }
})


module.exports = {
   TodoModel,
   TodoCollection
}
