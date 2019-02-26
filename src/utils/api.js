const MY_API_KEY = 'fa5f782c06225dc875abd35418b44543';
// Get 5 days forecast ahead
const getForecast = async(city) => {
  const data = await fetch(`
  https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&type=accurate&appid=${MY_API_KEY}`);
  return data.json();
}

// Get today data
const getDetail = async(city) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&type=accurate&appid=${MY_API_KEY}`);
  return data.json();
}

export { getForecast, getDetail }