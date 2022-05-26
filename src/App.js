import React, { useEffect, useState } from 'react';
import { WeatherForm } from './components/WeatherForm';
import { WeatherInfo } from './components/WeatherInfo';
import { getWeatherData } from './helpers/getWeatherData';


export const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [state, setState] = useState({
    data: {},
    loading: true
  });
  const { data, loading } = state;
  const { name, main, sys, weather, cod } = data;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    getWeatherData(inputValue)
      .then(data => {
        setState({
          data,
          loading: false
        })
      })
      .catch(error => {
        setState({
          data: error,
          loading: true
        })
        console.log(error);
      })

    setInputValue('');
  }

  useEffect(() => {
    getWeatherData()
      .then(data => {
        setState({
          data,
          loading: false
        })
      })

  }, [])

  return (
    <div className={
      (!loading && cod === 200) ? ((main.temp > 16) ? 'app-warm' : 'app') : 'app-error'
    }>
      <div className='container animate__animated animate__fadeIn'>
        <p>Weather App</p>

        <WeatherForm
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
        />

        {
          (!loading && cod === 200)
            ?
            (
              <WeatherInfo
                name={name}
                country={sys.country}
                temp={main.temp}
                max={main.temp_max}
                min={main.temp_min}
                weather={weather[0].main}
              />
            )
            :
            (
              (cod === '404')
                ?
                <p className='error'>There was an error in your search, check that your city is spelled correctly.</p>
                :
                ''
            )
        }
      </div>
    </div>
  )
}

