// // Create a new XMLHttpRequest object
// const xhr = new XMLHttpRequest();

const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  "https://api.openweathermap.org/data/2.5/weather?q=nalgonda&appid=89d950a695c26eaf185db4c464e481e6"
);
xhr.onload = function () {
  if (xhr.status == 200) {
    console.log(xhr.responseText);
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};

xhr.send();
