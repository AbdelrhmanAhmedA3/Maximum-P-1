import { Component,input } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { UserDetails } from './user-details';

const randomInxdex= Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  selectedUser:UserDetails = DUMMY_USERS[randomInxdex];
  constructor(){
console.log(randomInxdex);

  }

  ngOnInit(){

  }

// get users(){
//   return DUMMY_USERS
// }
}
