import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(public http: HttpClient){}
private url:string="http://localhost:3000";

table(){
  return this.http.get(`${this.url}/table`)
}
}