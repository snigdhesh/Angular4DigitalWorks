import { IUserDetails } from '../create-form/userdetails';
import { Observable } from 'rxjs/Rx';
import { Http,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class UsersListService {

  constructor(private http:Http) { };
  private baseUrl="api/userdetails"; // this "userdetails" should match with name that returns in "userdata.ts" file

  getUsers():Observable<IUserDetails[]>
  {
    return this.http.get(this.baseUrl)
    .map(this.extractData)
    //.do(res=>console.log(res))
    .catch(this.handleError);
  }

  getUser(id:number){
    

  }

  private extractData(response:Response) {
    let body = response.json();
    return body.data || {};
}


private handleError(error: Response): Observable<any> {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  console.error(error);
  return Observable.throw(error.json().error || 'Server error');
}


}
