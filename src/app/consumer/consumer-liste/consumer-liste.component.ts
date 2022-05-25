import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-liste',
  templateUrl: './consumer-liste.component.html',
  styleUrls: ['./consumer-liste.component.scss']
})
export class ConsumerListeComponent implements OnInit, OnDestroy {

  private subs: Subscription[]=[];
  consumers:Consumer[]= [];
  searchField:string = ''

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
    this.doSearch();
  }

  private doSearch(query?:string){
    if(!query) query='';
    this.subs.push(this.consumerService.find(query).subscribe({
      next:(consumers:Consumer[])=>{this.consumers=consumers},
      error: (error:Error)=>{console.error(error)},
      complete: ()=>{}
    }))
  }
  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe())
  }

  onSearch():void{
    this.doSearch(this.searchField);
  }

}
