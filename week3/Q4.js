async function fetchDataWithCallback(data) {
  const prom = new Promise((res, rej) => {
    if (data) {
      res(data);
    } else rej("Empty data set");
  });
  prom
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

const APIData = {
  name: "VSC",
  rollno: "22-05dr",
  year: "3rd yr",
};
const temp = null;
console.log("fetching of API Data");
await fetchDataWithCallback(APIData);
console.log("fetching of empty API");
fetchDataWithCallback(null);
