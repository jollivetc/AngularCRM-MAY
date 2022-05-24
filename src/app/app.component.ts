import { Component } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'crm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCRM';

  received($event:any){
    console.log($event)
  }
  received2($event:any){
    console.log(`it was ${$event}`)
  }

}
