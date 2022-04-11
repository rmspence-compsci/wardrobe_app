// const apiKey = '50b857753c980b99f5281bf0531b0e98'
const myApiKey='7ce157f20faf8b889330003da99309ba'
// async function getWeather(latitude, longitude) {
	
// 		fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + myApiKey,{
//         method: 'GET'
//     })
//     .then(response => response.json())
//     .then(data => {
//         // console.log(data);
// 		return data;
//     })
//     .catch(err => console.error(err));
// }
export async function getWeather(latitude,longitude) {
    // get Data from Storage
    try {
      const data = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly" + "&appid=" + myApiKey);
      if (data !== null) {
        console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }



// async function fetchFunction() {
//   try{
// 	const response = await fetch(`http://url.com`);
// 	const json = await response.json();
//   }
//   catch(err) {
//     throw err;
//     console.log(err);
//   }
// }