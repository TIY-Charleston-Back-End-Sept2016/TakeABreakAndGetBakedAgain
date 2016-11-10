const React = require('react')
// const HomeView = require('./component-homeview')

const DashboardView = React.createClass({
   render: function(){
      return (
         <div className="grid-container">
            <div className="sm-12-of-12 md-6-of-12">
               <div className="tile sm-1-x-1 bg-info">
                  <div className="tile-content contents-centered">
                     <h3>Get Your LIst</h3>
                  </div>
               </div>
            </div>

            <div className="sm-12-of-12 md-6-of-12">
               <div className="tile sm-1-x-1 bg-success">
                  <div className="tile-content contents-centered">
                     <h3>+</h3>
                  </div>
               </div>
            </div>

         </div>
      )
   }
})

module.exports = DashboardView
