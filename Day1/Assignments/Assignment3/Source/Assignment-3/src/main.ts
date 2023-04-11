import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

interface Student{
  studentId: number;
  StudenName : string;
  getMarks :(MathsMark:number) => number
}

class Students implements Student {
  studentId: number;
  StudenName: string ;

  constructor(id:number,name:string){
    this.studentId = id;
      this.StudenName = name;
  }
  getMarks(MathsMark: number): number {
    return MathsMark;
  }
}

let Student = new Students(1,"jaynesh");
console.log("MathsMark : " + Student.getMarks(100));