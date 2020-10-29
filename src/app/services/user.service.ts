import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from "../interfaces/userData"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private URL:string = "https://reqres.in";

  private urlToFirstPage = "https://reqres.in/api/users"

  private pagesUrl = "https://reqres.in/api/users?page="

  public getUsers(numPage:number):Observable<UserData>{

    if(numPage == 1){
      return this.http.get<UserData>(this.urlToFirstPage);
    }
    else{
      return this.http.get<UserData>(this.pagesUrl + numPage);
    }
  }
}
