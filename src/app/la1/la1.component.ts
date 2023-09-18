import { Component } from '@angular/core';

@Component({
  selector: 'app-la1',
  templateUrl: './la1.component.html',
  styleUrls: ['./la1.component.css']
})
export class La1Component {
  input1Value = 0;
  input2Value = 0;
  resultValue=0;
   
  
   add(value1: string,value2: string): void {
   this.input1Value = Number(value1);
   this.input2Value = Number(value2);
   this.resultValue= this.input1Value+this.input2Value
  }

 sub(value1: string,value2: string): void {
  this.input1Value = Number(value1);
  this.input2Value = Number(value2);
  this.resultValue= this.input1Value-this.input2Value
 }

 mul(value1: string,value2: string): void {
  this.input1Value = Number(value1);
  this.input2Value = Number(value2);
  this.resultValue= this.input1Value*this.input2Value
 }

divi(value1: string,value2: string): void {
  this.input1Value = Number(value1);
  this.input2Value = Number(value2);
  this.resultValue= this.input1Value/this.input2Value
}

}
