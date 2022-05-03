import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string = 'Clique';
  @Input() btnType: string = 'btn-success m-1';
  @Output() clickChild = new EventEmitter;
  textFilho: string = 'clicou o filho';

  constructor() { }

  ngOnInit(): void {
  }

  clicou(){
    this.clickChild.emit(this.textFilho);
  }

}
