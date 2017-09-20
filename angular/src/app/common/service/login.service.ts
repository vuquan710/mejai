import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  url = "http://localhost:3001";
  constructor(private _http: Http) {
    console.log('Login service');  
  }

  public doLogin (body) {
    let apiUrl =  this.url + "/login";
    return this._http.post(apiUrl, body).map(res => res.json());
  }

  public getAll () {
    let apiUrl =  this.url + "/list-user";
    return this._http.get(apiUrl).map(res => res.json());
  }

}
