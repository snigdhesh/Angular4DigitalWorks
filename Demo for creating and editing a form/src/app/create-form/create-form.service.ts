import { Observable } from 'rxjs/Rx';
import { IUserDetails } from './userdetails';

import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class CreateFormService {

  private baseUrl = "api/userdetails" //this "userdetials" should match with returning object in "userdata.ts"


  constructor(private http: Http) { }

  saveUser(user: IUserDetails): Observable<IUserDetails> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    console.log("user id: " + user.id);

    if (user.id === 0) {
      console.log("from service>>>>>>>>>:" + user);
      return this.createUser(user, options);
    }

    return this.updateUser(user, options);
  }

  getUser(id: number): Observable<IUserDetails> {

    if (id === 0) {

      return Observable.of(this.initializeUser());

    }

    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url).map(this.extractData);
  }

  createUser(user: IUserDetails, options: RequestOptions): Observable<IUserDetails> {
    user.id = undefined;
    return this.http.post(this.baseUrl, user, options)
      .map(this.extractData)
      .do(res => console.log("create product" + JSON.stringify(res)))
      .catch(this.errorHandler);

  }

  updateUser(user: IUserDetails, options: RequestOptions) {
    const url = "${this.baseUrl}/${user.id}"
    return this.http.put(url, user, options)
      .map(() => user)
      .do(res => console.log("update user:" + JSON.stringify(res)))
      .catch(this.errorHandler);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }


  private errorHandler(error: Response): Observable<any> {
    console.log(error);
    return Observable.throw(error.json().error || 'server error');
  }

  initializeUser(): IUserDetails {
    return {
      id: 0,
      name: null,
      email: null,
      phone: null
    }
  }
}
