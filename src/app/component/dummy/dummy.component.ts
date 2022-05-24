import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'crm-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {

  @Input()
  label = '';
  @Output()
  clicked = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.clicked.emit(`hello, ${this.label} was send`)
  }

}
