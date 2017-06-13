var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(locaton){
    var self = this;

    self.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(locaton).then(function(temp){
      self.setState({
        location: locaton,
        temp: temp,
        isLoading: false
      });
    },
    function(error){
      self.setState({
        isLoading: false
      });
      alert(error);
    });

  },
  render: function(){
    var {isLoading, temp, location} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    return(
      <div>
        <h2>Get Weather</h2>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
