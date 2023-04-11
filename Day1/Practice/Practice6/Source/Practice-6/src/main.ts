import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle);