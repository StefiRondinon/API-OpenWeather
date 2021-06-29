import React, { Component } from 'react';
import WeatherInfo from './Components/WeatherInfo.js';
import WeatherForm from './Components/WeatherForm';
import {WEATHER_KEY} from './Components/keys'

class App extends Component {

  getWeather =async e => {
    e.preventDefault()
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;

    const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=f2e64014470a10fb27d1d3255ab1d9f5';
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data)

    console.log(cityValue, countryValue)
  }

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <WeatherForm getWeather={this.getWeather} />
            <WeatherInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default App