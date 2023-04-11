
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface employee {
  id: number;
  FirstName: string;
  LastName: string;
  Address: string;
  Salary: number;
}

var employees: employee[] = [

  {
    "id": 1,
    "FirstName": "jaynesh",
    "LastName": "Mehta",
    "Address": "Ahemdabad",
    "Salary": 8000
  },

  {
    "id": 2,
    "FirstName": "kishor",
    "LastName": "parekh",
    "Address": "kashi",
    "Salary": 8000
  },

  {
    "id": 3,
    "FirstName": "Alvice",
    "LastName": "oslo",
    "Address": "goa",
    "Salary": 8000
  },


  {
    "id": 4,
    "FirstName": "Bishop",
    "LastName": "brikesh",
    "Address": "Kashmir",
    "Salary": 8000
  },

]

var table = document.getElementById("table") as HTMLInputElement;
var id = document.getElementById("id") as HTMLInputElement;
var fname = document.getElementById("fname") as HTMLInputElement;
var lname = document.getElementById("lname") as HTMLInputElement;
var address = document.getElementById("address") as HTMLInputElement;
var salary = document.getElementById("salary") as HTMLInputElement;

function gettable() {
  var x = "<tr><td>ID</td><td>FirstName</td><td>LastName</td><td>Address</td><td>Salary</td></tr>"
  table.innerHTML = x

  employees.forEach(element => {
    x = `<tr><td>${element.id}</td><td>${element.FirstName}</td><td>${element.LastName}</td><td>${element.Address}</td><td>${element.Salary}</td></tr>`
    table.innerHTML += x
  });
}
var addbtn = document.getElementById("add") as HTMLInputElement;
addbtn.onclick = function () {

  if (id.value == "" || fname.value == "" || lname.value == "" || address.value == "" || salary.value == "") {
    alert("Feilds should not be empty !!");
  } else {
    employees.push({
      "id": id.value,
      "FirstName": fname.value,
      "LastName": lname.value,
      "Address": address.value,
      "Salary": salary.value
    });
    gettable();
  };
}

//searching

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


//deleting 

var delid: number = document.getElementById("delEmployeeid") as HTMLInputElement;

var deletebtn = document.getElementById("delete") as HTMLInputElement;
deletebtn.onclick = function () {
  delid = Number(delid.value);

  employees.forEach(element => {
    if (element.id == delid) {
      employees.splice(element.id - 1, 1);
      gettable();
    }
  });
}


gettable();