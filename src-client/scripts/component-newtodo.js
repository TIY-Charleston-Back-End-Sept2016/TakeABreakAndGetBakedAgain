const React = require('react')
// const HomeView = require('./component-homeview')
const ACTIONS = require('./actions.js')

const NewTodo = React.createClass({
   _handleNewTodoItem: function(evt){
      let todoItemObj = {
         task: evt.target.task.value
      }
      ACTIONS.createNewTodo(todoItemObj)
   }

   render: function(){
      return (
         <div>
            <h2> Create a new Unemployed-do</h2>
            <form className="form-group grid-container" onSubmit={this._handleNewTodoItem}>


               <div className="form-field sm-7-of-12 md-8-of-12">
                   <label>Maybe Do Item </label>
                   <input type="text" name="task"/>
               </div>

               <div className="form-field sm-1-of-12 md-8-of-12">
                   <input type="submit" className="btn md primary" value="+" / >
               </div>

            </form>

         </div>
      )
   }
})



module.exports = NewTodo
