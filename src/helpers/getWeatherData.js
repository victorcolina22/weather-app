

export const getWeatherData = async (city = 'Santiago') => {
    try {
        const url = 'https://api.openweathermap.org/data/2.5/weather';
        const key = 'ebc15b3c43a9e923f0e9a545e72f5a80'

        const data = await fetch(`${url}?q=${city}&appid=${key}&units=metric`);
        const response = await data.json();

        return response;
    } catch (error) {
        console.log(error);
    }
}