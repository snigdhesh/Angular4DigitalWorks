import { IUserDetails } from '../create-form/userdetails';
import { UsersListService } from './users-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor(private userlistservice:UsersListService) { }
  errorMessage: string;
  users:any[]=[];
  userslength:number;

  ngOnInit() {
    this.getUsers();
    // console.log(this.userslength);
  }
  getUsers(){
    this.userslength=this.users.length;
    return this.userlistservice.getUsers().subscribe(
      res=>this.users.push(res),
      error => this.errorMessage = <any>error  
      
    );

    
  }

}
