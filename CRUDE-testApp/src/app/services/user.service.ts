import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = 'https://sheet.best/api/sheets/b42f00a8-8d22-4f2e-b865-a724638d0b8a';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { };

// C.R.U.D - CREATE, READ, UPDATE, DELETE



// Salva usuário no banco: CREATE
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions);
  };

// Retorna a lista de usuários: READ
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiURL);
  };

// Atualiza usuários: UPDATE
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

// Remove usuário do banco: DELETE
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  };


// Lista Usuário Único
  getUniqueUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`);
    
  }
}
