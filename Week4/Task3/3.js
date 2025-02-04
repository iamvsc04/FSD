const xhr = new XMLHttpRequest();
const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=nalgonda&appid=89d950a695c26eaf185db4c464e481e6";

xhr.open("GET", API_URL, true); // true makes it async

xhr.onload = function () {
  if (xhr.status === 200) {
    try {
      const response = JSON.parse(xhr.responseText); // Parse JSON
      console.log("Weather Data:", response);
      console.log(`Temperature: ${response.main.temp}K`);
      console.log(`Weather: ${response.weather[0].description}`);
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  } else {
    console.error(`Error: ${xhr.status} - ${xhr.statusText}`);
  }
};

xhr.send();
