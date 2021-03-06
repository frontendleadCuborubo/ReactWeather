var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
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
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
    });

    openWeatherMap.getTemp(locaton).then(function(temp){
      self.setState({
        location: locaton,
        temp: temp,
        isLoading: false
      });
    }, function(e){
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
      // alert(error);
    });

  },
  componentDidMount: function(){
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage(){
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if(temp && location) {
        return <WeatherMessage temp={temp} location={location} />;
      }
    }

    function renderErrorModale(){
      if (typeof errorMessage === 'string') {
        return(
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return(
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderErrorModale()}
      </div>
    )
  }
});

module.exports = Weather;
