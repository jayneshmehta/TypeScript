import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

class NamedValue<T> {
  private _value: T | undefined;

  constructor(private name: string) {}

  public setValue(value: T) {
    this._value = value;
  }

  public getValue(): T | undefined {
    return this._value;
  }

  public toString(): string {
    return `${this.name}: ${this._value}`;
  }
}
      
const value = new NamedValue<number>('myNumber');

value.setValue(50);

console.log(value.toString());