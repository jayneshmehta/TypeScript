
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface Product {
  id : number,
  name: string;
  price: number;
  quantity: number;
}

let Products : Product [] = [

  {
    id : 0,
    name: "Coconut Oil",
    price: 1200,
    quantity: 7
  },
  {
    id : 1,
    name: "Ghee",
    price: 1000,
    quantity: 9
  },
  {
    id : 2,
    name: "Shampoo",
    price: 780,
    quantity: 6
  },
];

function getcards(){
  
let cards = document.getElementById("cards") as HTMLInputElement
cards.innerHTML =``
Products.forEach((element,i)=> {
  console.log(element)
 cards.innerHTML +=` <div  style="  margin: 20px; border: 2px solid black; width:200px; padding:20px ">
  <h2>${element.name}</h1>
  <h3>Price :${element.price}</h3>
  <h3 id="id${element.id}">Quantity : ${element.quantity}</h3>
  <button class= "btnminus" id="${i}" >-</button>
  <button class= "btnplus" id="${i}" >+</button>
  </div>`
});

}
getcards();
let buttonsminus : any , buttonsplus : any ; 
  buttonsminus = document.getElementsByClassName('btnminus');
  for (const i of buttonsminus) {
    console.log(i)
   i.addEventListener("click",()=>{
    Products[i.id].quantity = Products[i.id].quantity-1
    var newQun = document.getElementById("id"+`${i.id}`) as HTMLInputElement
    newQun.innerHTML = "Quantity : "+`${Products[i.id].quantity}`  
    if(Products[i.id].quantity < 5){
      alert("Refill " + Products[i.id].name + "!!!")
    }});
    
  }
   buttonsplus = document.getElementsByClassName('btnplus');
  for (const i of buttonsplus) {
    i.addEventListener("click",()=>{
      Products[i.id].quantity = Products[i.id].quantity+1
    var newQun = document.getElementById("id"+`${i.id}`) as HTMLInputElement
    newQun.innerHTML = "Quantity : "+`${Products[i.id].quantity}`  
    
    if(Products[i.id].quantity < 5){
      alert("Refill " + Products[i.id].name + "!!!")
    }});
 }