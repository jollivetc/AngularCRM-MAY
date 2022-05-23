import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCRM';
  fruit='apple';
  myCssClass='apple';
  names=['Bob', 'John', 'Paul']
  car:string|undefined='renault'

  validateForm(carForm:NgForm){
    console.log(this.car);
    console.log(carForm.value);

  }

  change($event:MouseEvent):void{
    if(this.fruit==='apple'){
      this.fruit='banana';
      this.myCssClass='banana';
    }else{
      this.fruit='apple';
      this.myCssClass='apple';
    }
    console.log($event);
  }
}
