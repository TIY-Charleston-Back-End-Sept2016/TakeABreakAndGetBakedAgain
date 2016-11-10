const React = require('react')
// const HomeView = require('./component-homeview')

const DashboardView = React.createClass({
   render: function(){
      return (
         <div>
            <h1>Welcome to the dashboard</h1>
         </div>
      )
   }
})

const AuthView = React.createClass({
   render: function(){
      return (
         <div>
            <h2>Sign In or Sign up!</h2>
         </div>
      )
   }
})

const AppViewController = React.createClass({
  getInitialState: function(){
    let startingState = {}
    return startingState
  },

  render: function(){
    switch(this.props.routedFrom){
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
