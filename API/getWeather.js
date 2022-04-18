const apiKey = '50b857753c980b99f5281bf0531b0e98'

export async function getWeather(latitude,longitude) {
    
    try {
      const data = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + apiKey);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

