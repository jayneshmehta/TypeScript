
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface User {
  id: number;
  name: string;
  city: string;
  doj: Date;
}

var data: User[] = [
  { id: 1, name: "roshan", city: "Vapi", doj: new Date(2018, 2, 13) },
  { id: 2, name: "Ravi", city: "Ahmedabad", doj: new Date(2019, 2, 14) },
  { id: 3, name: "Kishan", city: "surat", doj: new Date(2020, 2, 15) },
  { id: 4, name: "Salman", city: "pune", doj: new Date(2021, 2, 15) },
  { id: 5, name: "Rashid", city: "mumbai", doj: new Date(2022, 2, 15) },
];

function getUser() {
  let table = document.querySelector("#table") as HTMLTableElement;
  table.innerHTML = `
  
  <tr>
  <th>ID</th>
  <th>Name</th>
  <th>City</th>
  <th>DOJ</th>
  </tr> 
  `;


  data.forEach(usr => {
    let row = table.insertRow();

    row.insertCell().innerHTML = usr.id
    row.insertCell().innerHTML = usr.name
    row.insertCell().innerHTML = usr.city
    row.insertCell().innerHTML = usr.doj.toDateString()
  });
}
getUser();

var Userid: number = document.getElementById("Userid") as HTMLInputElement;
var result = document.getElementById("result") as HTMLInputElement;

var searchbtn = document.getElementById("search") as HTMLInputElement;
searchbtn.onclick = function () {

  console.log(Userid.value)

  if (Userid.value == "") {
    alert("Enter any value for searching !")
  }
  var rel = data.filter((e) => e.id == Userid.value)
  console.log(rel[0])
  result.innerHTML =
    `id : ${rel[0].id} <br>
      Name : ${rel[0].name}<br> 
      City : ${rel[0].city}<br> 
      DOJ : ${rel[0].doj.getFullYear()}<br> 
      `
}


//by year
var Year: number = document.getElementById("byYear") as HTMLInputElement;
var result2 = document.getElementById("result2") as HTMLInputElement;

var searchbtn = document.getElementById("search2") as HTMLInputElement;
searchbtn.onclick = function () {
  var year = Number(Year.value)

  if (Year.value == 0) {
    alert("Enter any value for searching !")
  }
  var sby = data.filter((e) => year = e.doj.getFullYear())
  result2.innerHTML +=
    `id : ${sby[0].id} <br>
      Name : ${sby[0].name}<br> 
      City : ${sby[0].city}<br> 
      DOJ : ${sby[0].doj.getFullYear()}<br> 
      `
}

//by city 

var city: string  = document.getElementById("City") as HTMLInputElement;
var result3 = document.getElementById("result3") as HTMLInputElement;

var searchbtn = document.getElementById("search3") as HTMLInputElement;
searchbtn.onclick = function () {

  if (city.value == "") {
    alert("Enter any value for searching !")
  }
  var sbc = data.filter((e) => city.value == e.city)
  result3.innerHTML =
    `id : ${sbc[0].id} <br>
      Name : ${sbc[0].name}<br> 
      City : ${sbc[0].city}<br> 
      DOJ : ${sbc[0].doj.getFullYear()}<br> 
      `
}