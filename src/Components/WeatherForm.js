import React from 'react';
import '../styles/WeatherForm.css';

const WeatherForm = props => (
    <div className="card card-body justify-content-center ">
        <h1 className="title text-center "> The weather of your city</h1>
        <form onSubmit={props.getWeather}>
            <div className="form-group mt-2">
                <input type="text" name="city" placeholder="Your city name" className="form-control" autoFocus></input>
            </div>
            <div className="form-group mt-2">
                <input type="text" name="country" placeholder="Your country name" className="form-control"></input>
            </div>
            <div className="d-grid gap-2 col-4 mx-auto">
                <button className="btn btn-primary mt-3">
                    Get Weather
                </button>
            </div>
        </form>
    </div>
)

export default WeatherForm