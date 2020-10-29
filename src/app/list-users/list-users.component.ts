import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { UserData } from '../interfaces/userData';
import { User } from '../interfaces/user';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService:UserService,private activatedRoute: ActivatedRoute) { }

  public users:User[];

  public buttons:number[];

  public getUsers(numPage:number):void{
    this.userService.getUsers(numPage).subscribe(res=>{
      this.buttons = [];
      this.users = res.data;
      for(let i = 1;i <= res.total_pages;i++){
        this.buttons.push(i);
      }
    });
  }

  public changePage(numPage:number):void{
    this.getUsers(numPage);
  }


  ngOnInit(): void {

    let numPage:number  = Number(this.activatedRoute.snapshot.paramMap.get("numPage"));
    numPage == 0 ? numPage = 1 : null;
    this.getUsers(numPage);
  }

}
