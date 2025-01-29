// /use fetch function to access remote data using the given api and display the data in the form of a table .

const table = document.getElementById("res");
let tbody = document.createElement("tbody");
function fetching() {
  const data = fetch("https://jsonplaceholder.typicode.com/users");
  data.then((res) => {
    // res.json().then((data) => console.log(data));
    res = res.json();
    res.then((data) => {
      data.forEach((row) => {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = row.id;
        tr.appendChild(td1);
        let td2 = document.createElement("td");
        td2.innerText = row.name;
        tr.appendChild(td2);
        let td3 = document.createElement("td");
        td3.innerText = row.username;
        tr.appendChild(td3);
        let td4 = document.createElement("td");
        td4.innerText = row.website;
        tr.appendChild(td4);
        tbody.append(tr);
      });
    });
  });
  table.appendChild(tbody);
}

function clearing() {
  tbody.innerHTML = null;
}
