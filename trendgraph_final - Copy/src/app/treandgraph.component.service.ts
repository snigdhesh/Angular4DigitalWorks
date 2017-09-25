import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class TrendGraphService {

    private url: string = 'http://ec2-52-40-123-167.us-west-2.compute.amazonaws.com:8080/qb-services/v0.1/api/audits';
    //private url: string='https://jsonplaceholder.typicode.com/posts';
    //audits:any[];

    constructor(private http: Http) {
       
    }

    getAudits(){
            //return this.http.get(this.url).map(res=>res.json());
            return this.http.get(this.url);
    }
    // getAll(): Observable<any> {
    //     let audits = this.http.get(`${this.baseUrl}/audits/1`, { headers: this.getHeaders() }).map(res =>this.audits);
    //     return audits;
    // }
    // private getHeaders() {
    //     // I included these headers because otherwise FireFox
    //     // will request text/html instead of application/json
    //     let headers = new Headers();
    //     headers.append('Accept', 'application/json');
    //     return headers;
    // }



}