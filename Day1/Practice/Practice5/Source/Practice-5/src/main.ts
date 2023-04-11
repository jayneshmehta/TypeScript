  import './style.css'
  import typescriptLogo from './typescript.svg'
  import { setupCounter } from './counter'

  let x : number = 10;
  let y : number = 20;
  let myAdd = function (x: number, y: number): number {
    return x + y;
  };

  let z : number = myAdd(x,y);
  console.log(z);