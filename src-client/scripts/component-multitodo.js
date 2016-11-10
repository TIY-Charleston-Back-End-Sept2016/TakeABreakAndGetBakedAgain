const React = require('react')
const HomeView = require('./component-homeview')

const MultiTodo = React.createClass({
   componentWillMount: function(){
         ACTIONS.fetchTodoCollection()
   },

   render: function(){
      return (
         <div>
            <table>
               <thead>
                  <tr>
                     <th>Item</th>
                     <th>Status</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th>Wash my car</th>
                     <th><input type="checkbox"/></th>
                  </tr>
               </tbody>
            </table>
         </div>
      )
   }
})



module.exports = MultiTodo
