import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Http, RequestOptions, Headers, Response} from '@angular/http';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  userToken: any;
  constructor(private  http: Http) { }

  login(model: any) {
    const header = new Headers({'Content-type' : 'application/json'});
    const options = new RequestOptions({headers: header});

    return this.http.post(this.baseUrl + 'login', model, options).map((response: Response) => {
      const user = response.json();
      if (user) {
        localStorage.setItem('token', user.tokenString);
      }
    });
  }

}
