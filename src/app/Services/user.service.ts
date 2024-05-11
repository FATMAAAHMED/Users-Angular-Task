//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/User';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient,
  ) { }
  // Get All Users
  alldata: any;
  getAllUsers(): Observable<any> {
    return this.httpclient.get(`${environment.APIURL}`);
  }
  // Get USer By Id (User Details)
  getUserById(id: string): Observable<any> {
    return this.httpclient.get(`${environment.APIURL}/${id}`);
  }
}
