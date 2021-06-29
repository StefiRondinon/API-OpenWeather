import React from 'react';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
            <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus></input>
            </div>
            <div>
                <input type="text" name="country" placeholder="Your country name" className="form-control"></input>
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
)

export default WeatherForm