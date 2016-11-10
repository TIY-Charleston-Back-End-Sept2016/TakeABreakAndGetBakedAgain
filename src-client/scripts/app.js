const Backbone = require('backbone')
const ReactDOM = require('react-dom')
const React = require('react')

const AppViewController = require('./component-viewcontroller.js')

const AppRouter = Backbone.Router.extend({
  routes: {
    "login" : 'renderAuthView',
    "*dash" : "renderDashboard"
  },

  renderAuthView: function(){
    ReactDOM.render(<AppViewController routedFrom="AuthView"/>, document.querySelector('#app-container'))

  },

  renderDashboard: function(){
    ReactDOM.render(<AppViewController routedFrom="DashboardView"/>, document.querySelector('#app-container'))
  },

  initialize: function(){
     Backbone.history.start();
  }
})

let app = new AppRouter()
