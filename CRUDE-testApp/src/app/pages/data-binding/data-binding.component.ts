import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text: string = 'Two Way Data Binding';
  imageUrl: string = 'https://picsum.photos/300/300';
  imageDesc: string = 'Imagem aleatoria retirada do Lorem Picsum';
  buttonText: string = 'Clique Aqui';
  textRed: boolean = false;
  bgColor: string = 'green';
  textInput: string = '';
  numr: number = 0;
  enterSandman: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome(){
    return this.text;
  }

  clicou(){
    this.text = 'Vinculação de Dados Birecional';
    this.textRed = true;
    console.log('Clicou em mim!');
  }

  clicouReverso(){
    this.text = 'Two Way Data Binding';
    this.textRed = false;
    console.log('Clicou no lugar certo hein danado!')
  }

  clicouNoFilho(text: any) {
    console.log('Clicou no Filho');
  }

  incrementor(){
    this.numr++;
  }

  seekAndDestroy(){
    this.enterSandman = true;
  }

}
