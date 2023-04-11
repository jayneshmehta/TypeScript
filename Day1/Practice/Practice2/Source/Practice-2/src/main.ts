import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'



function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${typeof padding}'.`);
}

var v : string = padLeft("Hello world", 10); 
console.log(v)