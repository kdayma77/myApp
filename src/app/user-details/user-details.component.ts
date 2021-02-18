import { Component, OnInit } from '@angular/core';
import { ProfileDetails } from '../user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  users: ProfileDetails[] = []
  constructor() { }

  ngOnInit(): void {
    const profileDetails = {
      firtname: localStorage.getItem('firstname'),
      lastname: localStorage.getItem('lastName'),
      email: localStorage.getItem('email'),
      createdDate: localStorage.getItem('dateValue')
    }
    this.users.push(profileDetails);    
  }

  Delete(index) {
    const userEmail = this.users[index].email;
    this.users = this.users.filter(item => item.email !== userEmail);
     localStorage.removeItem('firstname'),
     localStorage.removeItem('lastName'),
     localStorage.removeItem('email'),
     localStorage.removeItem('dateValue')
  }

}
