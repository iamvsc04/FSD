const url =
  "https://api.openweathermap.org/data/2.5/weather?q=nalgonda&appid=89d950a695c26eaf185db4c464e481e6&units=metric";
const box = document.getElementById("res");
function fetchData() {
  fetch(url).then((res) =>
    res.json().then((data) => {
      console.log(data);
      let info = document.createElement("p");
      info.innerHTML =
        "curr temperature :  " +
        data.main.temp +
        "\nminimum temperature of the day: " +
        data.main.temp_min +
        "\nmaximum temperature of the day: " +
        data.main.temp_max +
        " ";
      box.appendChild(info);
    })
  );
}
