import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  numr: number = 0;
  myText: string = 'hello world!';
  currentDate = new Date;
  pessoa = {
    nome: 'Chalana',
    idade: 48,
    profissao: 'Mateiro'
  }

  nomes = ['Fernando', 'Daiane', 'Pietro'];

  constructor() { }

  ngOnInit(): void {
  }

  mudaValor(){
    this.numr = 12345789;
  }

  add(text: string){
    this.nomes.push(text);
  }

}
