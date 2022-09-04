import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _HttpClient:HttpClient) {}

  sendMessage(formdata:any):Observable<any>{
    return this._HttpClient.post('https://demoyoursite.net/boula/basma/public/api/contact', formdata);
  }

}
