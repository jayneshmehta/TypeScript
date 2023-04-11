import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'


let isDone: boolean = false;
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;


let color: string = "blue";
color = 'red';

let fullName: string = `jaynesh mehta`;
let age: number = 21;
let sentence: string = `My name is ${fullName} I'll be ${age + 1} years old next year`;

let list: Array<string> = ["hello", "my", "Name","is","jaynesh"];

let x : [string , number] = ["jaynesh",21];

console.log(sentence)

enum Color  {
  green,
  red,
  yellow,
  purple
}

let c : Color = Color.green;
console.log(c);

