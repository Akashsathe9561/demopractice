import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  firstName : string ='Akash';
  lastName : string = 'Sathe';
  minLength = 3 ;
  inputType : string ='checkbox';
  placeHolder = 'Enter Name';
  textBoxId ='txtid';
  pColour ='text-primary';
  selectedcity : string ;


  number = 100;

  constructor(){
    this.selectedcity = '';

  }

  onDecrement(){
    this.number --;

  }

  onIncrement(){
    this.number ++;
  }

  onCityChange(event:any){
    this.selectedcity = event.target.value ;

  }



}



