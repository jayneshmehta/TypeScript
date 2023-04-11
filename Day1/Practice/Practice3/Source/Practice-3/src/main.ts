import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

class Wishing{
  wishing: string;   

  constructor(message:string){
    this.wishing = message;
  }

  wish(){
    return "Good Morning "+this.wishing;
  }
}

let wishing = new Wishing("Have a nice Day");
console.log(wishing.wish());


class Animal{
  move(distance : number = 0 ){
  console.log("Animal moved " + distance + " ms.")
  }
}

class Dog extends Animal{
   bark(){
    console.log("Dog barks Woof..! Woof..!");
   } 
}

const dog = new Dog();
dog.bark();
dog.move(12);

// private class
class Animal2 {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
 
class Rhino extends Animal2 {
  constructor() {
    super("Rhino");
  }
}
 
class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
 
let animal = new Animal2("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
 
animal = rhino;
// animal = employee;


// protected class