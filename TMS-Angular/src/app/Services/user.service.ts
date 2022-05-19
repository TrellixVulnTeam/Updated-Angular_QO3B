import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseurl = "https://localhost:7161/User/"

  getAllUsersByRoleId(id: number): Observable<UserService[]> {
    return this.http.get<UserService[]>(this.baseurl + `GetUsersByRole/${id}`)
  }
  getUsersById(id: number) {
    return this.http.get(this.baseurl + `${id}`);
  }
  getAllUsersByRole(id: number): Observable<any> {
    return this.http.get<any>(this.baseurl + `Role/${id}`)
  }
   postUser(data:any): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<any>(this.baseurl + 'User', data)
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor() { }
// }
