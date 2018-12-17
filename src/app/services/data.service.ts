import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userData: any;
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { 

  
  }

  getUsersData(){
    return this.http.get('https://reqres.in/api/users')
  }
  createUser(name){
    console.log("creating user", name);
    let names = {
      "name": "morpheus",
      "job": "leader"
  }
    return this.http.post('https://reqres.in/api/users', names, this.httpOptions)
    // .pipe(
    //   // console.log("its error");
      
    // )
  }
}
