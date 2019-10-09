import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
// tslint:disable-next-line: class-name
export class logInService {
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };


  login(obj) {
    return this.http.post<any>('https://dcubd3oc75.execute-api.ca-central-1.amazonaws.com/prod/v1', obj, this.httpOptions).pipe(
      res => {
        console.log(res);
        return res;
      }
    );
  }
}

