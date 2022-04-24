import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count: number = 0;

  myText: string = "";
  
  pessoas = [
    {
      nome: "Melquisedeque",
      sobrenome: "Taveira"
    },
    {
      nome: "Ananias",
      sobrenome: "Pacheco"
    },
    {
      nome: "Aloísio",
      sobrenome: "Romão"
    },
    {
      nome: "Quitéria",
      sobrenome: "Pires Cavalcante"
    }
  ];

  constructor(){};

  ngOnInit(){
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  clicou(name: string): void {
    console.log(name, 'clicou em mim');
  }

}
