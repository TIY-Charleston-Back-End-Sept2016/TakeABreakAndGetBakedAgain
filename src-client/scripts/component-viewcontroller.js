const React = require('react')
const STORE = require('./store.js')
const ACTIONS = require('./actions.js')

const DashboardView = require('./component-dashboard.js')
const AuthView = require('./component-auth.js')
const NewTodoView = require('./component-newtodo.js')
const MultiTodoView = require('./component-multitodo.js')

const AppViewController = React.createClass({
  getInitialState: function(){
    STORE.setStore('currentTodos', [])
    let startingState = this.getStoreData()
    return startingState
  },

 componentWillMount: function(){
    let self = this
    STORE.onChange(function(){
        let updateState = STORE.getStoreData()
        self.setState(updateState)
    })
 }

  render: function(){
    switch(this.props.routedFrom){
      case "NewTodoView":
         return <NewTodoView/>
         break;

      case "MultiTodoView":
         return <MultiTodoView currentTodos={this.state.currentTodos} />
         break;

      case "AuthView":
         return <AuthView/>
         break;


      case "DashboardView":
         console.log("rendering dashboard")
         return <DashboardView />
         break;

      default:
         return <div><h1>Yolo!!</h1></div>
    }
  }

})

module.exports = AppViewController
