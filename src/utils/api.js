const MY_API_KEY= '01a7be42c3668b9fdb96e31ac3e79135';
// Get 5 days forecast ahead
const getForecast = async(city) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=accurate&APPID=${MY_API_KEY}&cnt=5`);
  return data.json();
}

// Get today data
const getDetail = async(city) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&type=accurate&APPID=${MY_API_KEY}`);
  return data.json();
}

export { getForecast, getDetail }