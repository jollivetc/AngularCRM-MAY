import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription, take } from 'rxjs';
import { DemoObservableService } from '../common/demo-observable.service';

@Component({
  selector: 'crm-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions : Subscription[] = [];

  constructor(private demoObs: DemoObservableService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  testObservable(){
    const subscriber={
      next: (data:number)=>{ console.log(data)},
      error: (error:Error)=>{console.error(error)},
      complete: ()=>{console.log("c'est fini")}
    }
    const subscription = this.demoObs.test().pipe(
        map(x => x*10),
        take(2)
      ).subscribe(subscriber)
    this.subscriptions.push(subscription)
  }

}
