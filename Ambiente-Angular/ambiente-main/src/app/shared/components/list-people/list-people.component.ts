import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  pessoa = [
    {
      name: '',
      lastName: '',
      age: 0,
    }
  ];
  
  constructor( private peopleService: PeopleService){};

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoa = people;
    })
  };


}
