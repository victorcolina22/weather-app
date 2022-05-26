import React from 'react';


export const WeatherForm = ({ inputValue, handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Your city name'
                autoComplete='off'
                onChange={handleInputChange}
                value={inputValue}
            />
        </form>
    )
}
