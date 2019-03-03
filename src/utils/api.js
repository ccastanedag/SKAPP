import moment from 'moment';

const MY_API_KEY = 'fa5f782c06225dc875abd35418b44543';

// Get the time of the first day from OpenWeather API
const getTimeReference = (object) => {
  const dateTime = object.list[0].dt_txt;
  const time = dateTime.substring(dateTime.length - 8);
  return time;
}

// From the 40 results, filter only 5 with equal time like getTimeReference
const filterForecast = (object) => {
  const timeReference = getTimeReference(object);
  return object.list.filter((forecast) => {
    const dateTime = forecast.dt_txt;
    const time = dateTime.substring(dateTime.length - 8);
    return time === timeReference
  });
}

const getCountryCity = (object) => {
  return {
    country: object.city.country,
    city: object.city.name
  }
}

// Return in the format of plain object to render the chart and cards
const getForecastFormatted = (object) => {
  const filteredData = filterForecast(object);
  const formatted = filteredData.map((filteredForecast) => {
    return ({
      temperature: Math.round(filteredForecast.main.temp),
      icon: filteredForecast.weather[0].icon,
      date: moment(filteredForecast.dt_txt).format("dddd, MMM DD"),
      humidity: filteredForecast.main.humidity,
      min_temperature: filteredForecast.main.temp_min,
      max_temperature: filteredForecast.main.temp_max,
      description: filteredForecast.weather[0].description
    });
  });
  return formatted;
}

// Get 5 days forecast ahead
const getForecast = async (city, unit) => {
  const data = await fetch(`
  https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&type=accurate&appid=${MY_API_KEY}`);
  return data.json();
}

// Convert a string to "Title Case"
const toTitleCase = (text) => {
  return text.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
};

export { getForecast, getForecastFormatted, getCountryCity, toTitleCase }