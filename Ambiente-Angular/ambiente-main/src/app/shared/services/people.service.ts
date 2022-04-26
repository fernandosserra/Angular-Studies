import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { };

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        name: 'Fernando',
        lastName: 'Serra',
        age: 32
      },
      {
        name: 'Daiane',
        lastName: 'Bassetti',
        age: 31
      },
      {
        name: 'Rosanta',
        lastName: 'Souza',
        age: 24
      },
      {
        name: 'Mirelly',
        lastName: 'Souza',
        age: 3
      }
    ];
    
    return of(peopleArray);
  }
}
