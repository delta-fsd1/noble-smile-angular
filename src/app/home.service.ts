import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) {}
  
  aboutArray:any = [];
  homeData: any= [];
  teamContainer: any = [];
  teamArray: any = [];
  servicesArray: any = [];
  servicesContainer: any = [];
  settingsArray: any = [];
  footerServices: any = [];
  doctorsContainer: any = [];
  singleDoctor: any;
  currentLang: string = 'en'
  htmlDirection: string = 'lrt'
  doctorId: any;

  getHomeData(lang:string):Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Accept-Language', lang)
    }
    console.log(httpOptions);
    return this._HttpClient.get('https://demoyoursite.net/boula/basma/public/api/home', httpOptions);
  };


  getSettings(lang:string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Accept-Language', lang)
    }
    return this._HttpClient.get('https://demoyoursite.net/boula/basma/public/api/setting', httpOptions);
  }
  
}
