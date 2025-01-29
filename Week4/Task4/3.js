const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=89d950a695c26eaf185db4c464e481e6&units=metric`;
const table = document.getElementById("res");
let tbody = document.createElement("tbody");

function fetching() {
  let city = document.getElementById("city").value;
  if (city == "") {
    alert("Enter a valid city ");
    return;
  }
  document.getElementById("fetchBtn").disabled = true;
  document.getElementById("clearBtn").disabled = false;

  alert("Fetching data...");

  setTimeout(() => {
    alert("Data fetched successfully!");
  }, 10);
  let data = fetch(url);
  data.then((res) => {
    res = res.json();
    let cnt = 1;
    res.then((data) => {
      for (let i = 0; i < data.list.length; i = i + 8) {
        let row = data.list[i];
        // console.log(row);
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = cnt++;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerText = row.dt_txt.split(" ")[0];
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerText = row.main.temp;
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerText = row.main.humidity;
        tr.appendChild(td4);
        tbody.append(tr);
      }
    });
  });
  table.appendChild(tbody);
}

function clearing() {
  tbody.innerHTML = null;
  document.getElementById("clearBtn").disabled = true;
  document.getElementById("fetchBtn").disabled = false;

  alert("Clearing data...");

  setTimeout(() => {
    alert("Data cleared successfully!");
  }, 10);
}
