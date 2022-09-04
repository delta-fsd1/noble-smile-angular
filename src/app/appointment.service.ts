import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private _HttpClient:HttpClient) {}

  getAppointment(formdata:any):Observable<any>{
    return this._HttpClient.post('https://demoyoursite.net/boula/basma/public/api/appointment', formdata);
  }


}
