import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count: number = 0;

  myText: string = "";
  
  constructor(){};

  ngOnInit(){
    let interval = setInterval(() => {
      this.count++;
      if(this.count === 10){
        clearInterval(interval);
      }
    }, 1000);    
  };

  clicou(name: string): void {
    console.log(name, 'clicou em mim');
  };

}
