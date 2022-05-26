import React from 'react';


export const WeatherInfo = ({ name, country, temp, max, min, weather }) => {
    return (
        <div className='weather-info animate__animated animate__fadeIn'>
            <p className='weather-city'>{name}</p>
            <p className='weather-country'>{country}</p>
            <p className='weather-date'>Tuesday, January 10, 2022</p>
            <p className='weather-temperature'>{Math.round(temp)}°</p>
            <p className='line'>---------------------</p>
            <p className='weather'>{weather}</p>
            <p className='weather-min-max'>{Math.round(min)}° / {Math.round(max)}°</p>
        </div>
    )
}
