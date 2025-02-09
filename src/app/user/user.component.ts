import { Component,signal } from '@angular/core';
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
  selectedUser = signal<UserDetails[]>(DUMMY_USERS);

  // get users(){
  //   return  'assets/users/'+this.selectedUser().avatar
  // }

  constructor(){}

  ngOnInit(){

  }

  onSelected(){
    // const randomInxdex= Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomInxdex])
  }

}
