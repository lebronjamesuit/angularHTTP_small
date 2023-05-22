
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {


  private apiURL = 'https://jsonplaceholder.typicode.com';
  
  constructor(private myHttp: HttpClient){}

  
  getUsers() : Observable<User[]> {    
    return this.myHttp.get<User[]>('https://jsonplaceholder.typicode.com/users') ;
    
    
  }

  getUser() : Observable<User> {    
    return this.myHttp.get<User>(this.apiURL + '/users/1') ;
   }

   
   createUser(user : User) : Observable<User>{
    return this.myHttp.post<User>(this.apiURL + '/users', user);
   }


}
