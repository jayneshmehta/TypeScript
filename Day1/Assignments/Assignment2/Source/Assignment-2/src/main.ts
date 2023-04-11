import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  fullname: string;
  address: string;
  flatnumber: string;
  city: string;
  state: string;
  pf: number;
  salary: number;
}

let employees1 : Employee[] = [
  {
    id: 1,
  firstName: "jaynesh",
  lastName: "mehta",
  fullname: "",
  address: "404 , vadodara , gujarat",
  flatnumber: "",
  city: "",
  state: "",
  pf: 0,
  salary: 200000,
  },
  {
    id: 2,
  firstName: "Mark ",
  lastName: "trade",
  fullname: "",
  address: "303 , Pune , Maharastra",
  flatnumber: "",
  city: "",
  state: "",
  pf: 0,
  salary: 50000,
  },
  {
    id: 3,
  firstName: "Alice",
  lastName: "Biden",
  fullname: "",
  address: "420 , Jodhpur , Rajasthan",
  flatnumber: "",
  city: "",
  state: "",
  pf: 0,
  salary: 80000,
  },
  {
    id: 4,
  firstName: "Jack",
  lastName: "Rayan",
  fullname: "",
  address: "330 , Mumbai , Maharastra",
  flatnumber: "",
  city: "",
  state: "",
  pf: 0,
  salary: 40000,
  },
]

let employees2 : any[] =[

  {
    id: 5,
    firstName: "Shan",
    lastName: "Michal",
    fullname: "",
    address: "220 , Hydrabad , A P",
    flatnumber: "",
    city: "",
    state: "",
    pf: 0,
    salary: 50000,
  },
  {
    id: 6,
  firstName: "Jofra",
  lastName: "Archer",
  fullname: "",
  address: "320 , Rajkot , Gujarat",
  flatnumber: "",
  city: "",
  state: "",
  pf: 0,
  salary: 40000,
  },
]


let employees = [
  ...employees1,
  ...employees2
];

function getEmployees() {
  let table = document.querySelector("#table") as HTMLTableElement;
  table.innerHTML = `
  
  <tr>
  <th>ID</th>
  <th>Full Name</th>
  <th>Flat Number</th>
  <th>City</th>
  <th>State</th>
  <th>PF</th>
  <th>Salary</th>
  </tr> 
  `;


employees.forEach((emp) => {
  let fullname = emp.firstName + " " + emp.lastName;
  let faddress = emp.address.split(",");
  let row = table.insertRow();
  emp.fullname = fullname;
  emp.flatnumber = faddress [0];
  emp.city = faddress [1];
  emp.state = faddress [2];
  let pf = (emp.salary*0.12)+"$"

  row.insertCell().innerHTML = emp.id
  row.insertCell().innerHTML = emp.fullname
  row.insertCell().innerHTML = emp.flatnumber
  row.insertCell().innerHTML = emp.city
  row.insertCell().innerHTML = emp.state
  row.insertCell().innerHTML = pf
  row.insertCell().innerHTML = emp.salary+"$"
  
});
}

var table = document.getElementById("table") as HTMLInputElement;
var id = document.getElementById("id") as HTMLInputElement;
var fname = document.getElementById("fname") as HTMLInputElement;
var lname = document.getElementById("lname") as HTMLInputElement;
var address = document.getElementById("address") as HTMLInputElement;
var salary = document.getElementById("salary") as HTMLInputElement;


var addbtn = document.getElementById("add") as HTMLInputElement;
addbtn.onclick = function () {

  if (id.value == "" || fname.value == "" || lname.value == "" || address.value == "" || salary.value == "") {
    alert("Feilds should not be empty !!");
  } else {
    
employees.push(
    {
    id: id.value,
    firstName: fname.value,
    lastName: lname.value,
    fullname: "",
    address: address.value,
    flatnumber: "",
    city: "",
    state: "",
    pf:(Number(salary.value)*0.12)+"$",
    salary: salary.value,
    }
  );
  getEmployees();
  };
}


var Employeeid: number = document.getElementById("Employeeid") as HTMLInputElement;
var Indexnumber: number = document.getElementById("Indexnumber") as HTMLInputElement;
var result = document.getElementById("result") as HTMLInputElement;


var searchbtn = document.getElementById("search") as HTMLInputElement;
searchbtn.onclick = function () {

  if (Employeeid.value != "" && Indexnumber.value != "") {
    alert("Enter in any one box for searching !")
  }
  else if (Employeeid.value == "") {
    var y = employees[Indexnumber.value];
    result.innerHTML =
      ` `;

    result.innerHTML +=
      `id : ${y.id} <br>
      FirstName : ${y.FirstName}<br> 
      LastName : ${y.LastName}<br> 
      Address : ${y.Address}<br> 
      Salary : ${y.Salary}<br> `;
  } else {
    console.log(Employeeid.value)
    var empid = Number(Employeeid.value) - 1
    result.innerHTML =
      ` `;

    result.innerHTML +=
      `id : ${employees[empid].id} <br>
      FirstName : ${employees[empid].FirstName}<br> 
      LastName : ${employees[empid].LastName}<br> 
      Address : ${employees[empid].Address}<br> 
      Salary : ${employees[empid].Salary}<br> `;
  }
}

var delid: number = document.getElementById("delEmployeeid") as HTMLInputElement;

var deletebtn = document.getElementById("delete") as HTMLInputElement;
deletebtn.onclick = function () {
  delid = Number(delid.value);

  employees.forEach((element,i) => {
    if (element.id == delid) {
      employees.splice(i, 1);
      getEmployees();
    }
  });
}

getEmployees();