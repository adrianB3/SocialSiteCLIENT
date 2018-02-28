import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {JwtHelper, tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';
  userToken: any;
  decodedtoken: any;
  jwtHelper = new JwtHelper();
  constructor(private  http: Http) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map((response: Response) => {
      const user = response.json();
      if (user) {
        localStorage.setItem('token', user.tokenString);
        this.decodedtoken = this.jwtHelper.decodeToken(user.tokenString);
        console.log(this.decodedtoken);
      }
    }).catch(this.handleError);
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model, this.requestOptions()).catch(this.handleError);
  }

  loggedIn(){
    return tokenNotExpired('token');
  }

  private requestOptions() {
    const header = new Headers({'Content-type' : 'application/json'});
    return new RequestOptions({headers: header});
  }

  private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    const serverError = error.json();
    let modelStateError = ' ';
    if (serverError){
      for (const key in serverError){
        if(serverError[key]){
          modelStateError += serverError[key];
        }
      }
    }

    return Observable.throw(
      modelStateError || 'Server Error'
    );

  }

}
