var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1caab28b48e5d2c163d29a02de8e2213&units=metric';

//1caab28b48e5d2c163d29a02de8e2213

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(

      function(res){
        if (res.data.cod && res.data.message) {
          throw new Error(res.data.message);
        }else{
          return res.data.main.temp;
        }
      }, function(res){
        console.log(res.data);
        // throw new Error(res.data.message);
    });
  }
};
