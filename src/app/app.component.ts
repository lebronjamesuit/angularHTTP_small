import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User} from './interfaces/user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myAngularHttpApp';

  private user : User =  {
      
      'name':'VO TRAN NHAT Graham',
      'username':'Lebron',
      'email':'Sincere@april.biz',
      'address':{
         'street':'Shor Hill ',
         'suite':'Apt. 556',
         'city':'Gwenborough',
         'zipcode':'92998-3874',
         'geo':{
            'lat':'-37.3159',
            'lng':'81.1496'
         }
      },
      'phone':'1-770-736-8031 x56442',
      'website':'hildegard.org',
      'company':{
         'name':'Axon-Crona',
         'catchPhrase':'Multi-layered client-server neural-net',
         'bs':'harness real-time e-markets'
      }
   }
  

  constructor(private userService: UserService){}
  
  
  
  ngOnInit(): void {
    console.log('hello this is AppComponent'); 
    this.onGetUser();

    console.log('----------------'); 
    this.onGetOneUser();

    console.log('----------------'); 
    this.onCreateUser(this.user);
  }

  
  onGetUser(): void {
    this.userService.getUsers().subscribe(
      (response) => console.log(response),
       (error => console.log(error)),
       () => console.log('Get all users thanh cong')
       ) 
  }

  onGetOneUser() : void {
    this.userService.getUser().subscribe(
      (response) => console.log(response),
      (error => console.log(error)),
      () => console.log('Get 1 user thanh cong')
    )
  }

  onCreateUser(user :User) : void {
    this.userService.createUser(user).subscribe(
      (response) => console.log(response),
      (error => console.log(error)),
      () => console.log('Save 1 user thanh cong')
    )
  }

}
