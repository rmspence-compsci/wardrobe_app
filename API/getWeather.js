// const apiKey = '50b857753c980b99f5281bf0531b0e98'
const myApiKey='7ce157f20faf8b889330003da99309ba'
function getWeather(latitude, longitude) {
    fetch( "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + myApiKey)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        return data
      }
      )
      .catch(error => console.log(error))
    }
export default getWeather;