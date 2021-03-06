import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConsumerService } from '../consumer.service';
import { Consumer } from '../model/consumer';

@Component({
  selector: 'crm-consumer-fiche',
  templateUrl: './consumer-fiche.component.html',
  styleUrls: ['./consumer-fiche.component.scss']
})
export class ConsumerFicheComponent implements OnInit, OnDestroy {

  consumerForm: FormGroup;
  private subs:Subscription[]=[];

  constructor(private consumerService:  ConsumerService, private router:Router, private route:ActivatedRoute) {
    this.consumerForm= new FormGroup({
      id:new FormControl('',[]),
      civility: new FormControl('',[Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required]),
      createdAt: new FormControl('',[]),
      updatedAt: new FormControl('',[])
    })

  }

  ngOnInit(): void {
    this.subs.push(this.route.paramMap.subscribe({
      next:(paramMap)=>{
        this.subs.push(this.consumerService.getById(paramMap.get('id')!).subscribe({
          next:(consumer:Consumer)=>{this.consumerForm.patchValue(consumer)},
          error:(error:Error)=>{console.error(error)}
        }))
      },
      error:(error:Error)=>{console.error(error)}
    }));

  }
  ngOnDestroy(): void {
      this.subs.forEach(sub=>sub.unsubscribe());
  }

  save():void{
    const subscription = this.consumerService.save(this.consumerForm.value).subscribe({
      next: (consumer:Consumer)=>{ this.router.navigateByUrl('list')},
      error: (error:Error)=>{console.error(error)},
      complete:()=>{}
    });
    this.subs.push(subscription);
  }

  cancel():void{
    this.router.navigateByUrl('list');
  }
}
