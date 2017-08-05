var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    var encodeLocation = encodeURIComponent(location);
    // console.log(e.type);
    if (location.length > 0 && location != '') {
      this.refs.location.value = '';
      window.location.hash = '#/?location=' + encodeLocation;
    }
    // console.log(location);
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Menu App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
            <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" ref='location' placeholder="Search weather"/>
              </li>
              <li>
                <input className="button" type="submit" value="Get Weather"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
});

// var Nav = React.createClass({
//   render: function(){
//     return(
//       <nav>
//         <h3>nav component</h3>
//         <ul>
//           <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
//           <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
//           <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
//         </ul>
//       </nav>
//     )
//   }
// });

// var Nav = (props) => {
//   return(
//     <div className="top-bar">
//       <div className="top-bar-left">
//         <ul className="menu">
//           <li className="menu-text">React Menu App</li>
//           <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
//           <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
//           <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
//         </ul>
//       </div>
//       <div className="top-bar-right">
//         <ul className="menu">
//
//         </ul>
//       </div>
//     </div>
//   )
// }

module.exports = Nav;

// var old_nav = (
//   <nav>
//     <h3>nav component</h3>
//     <ul>
//       <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
//       <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
//       <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
//     </ul>
//   </nav>
// )
