var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function(){
//     var {temp, location} = this.props;
//     return(
//       <h2>Its it {temp} in {location}</h2>
//     )
//   }
// });

var WeatherMessage = ({temp, location}) => {
  return(
    <h3 className="text-center">Its it {temp} in {location}</h3>
  )
}

module.exports = WeatherMessage;
