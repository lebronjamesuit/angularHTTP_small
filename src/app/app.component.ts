import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myAngularHttpApp';

  constructor(private userService: UserService){}
  
  
  
  ngOnInit(): void {
    console.log('hello this is AppComponent'); 
    this.onGetUser();
  }

  
  onGetUser(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
       (error => console.log(error)),
       () => console.log('Get all users thanh cong')
       ) 
  }


}
