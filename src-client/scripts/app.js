const Backbone = require('backbone')
// const AppViewController = require('backbone')

const AppRouter = Backbone.Router.extend({
  routes: {
    "*" : "renderCatchAll"
  },

  renderCatchAll: function(){
    ReactDOM.render(<h1>YOLO <small><br/>baby champu</small><h1/>, document.querySelector("#app-container"));
  },

  initialize: function(){
  }
})

let app = new AppRouter()
