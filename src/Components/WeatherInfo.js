import React from 'react';
import '../styles/WeatherInfo.css';


const WeatherInfo = props => {
    return (

        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p> {props.error}</p>
                </div>
            }
            {
                props.temperature ?

                    <div className="card card-body">

                        <p> <i className="fas fa-location-arrow"></i> Location: {props.city}, {props.country}</p>
                       
                        <p> <i className="fas fa-temperature-low"> </i> Temperature: {props.temperature} °C, {props.description} </p>
                       
                        <p> <i className="fas fa-water"></i> Humidity: {props.humidity} % </p>
                       
                        <p> <i className="fas fa-wind"></i> Wind speed: {props.wind_speed} </p>
                    </div>
                    
                    :
                    <div className="card card body">  </div>
            }
        </div>


    )
}

export default WeatherInfo