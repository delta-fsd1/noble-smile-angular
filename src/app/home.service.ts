import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient: HttpClient) { }

  aboutArray: any = [];
  aboutContainer: any = [];
  missionArray: any = [];
  visionArray: any = [];
  homeData: any = [];
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
  slidersContainer: any = [];
  slidersId: any;
  singleSlider: any;
  partnersArray: any = [];

  getHomeData(lang: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Accept-Language', lang)
    }
    return this._HttpClient.get('https://demoyoursite.net/boula/basma/public/api/home', httpOptions);
  };

  getAboutData(lang: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Accept-Language', lang)
    }
    return this._HttpClient.get('https://demoyoursite.net/boula/basma/public/api/about', httpOptions)
  }

  getSettings(lang: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Accept-Language', lang)
    }
    return this._HttpClient.get('https://demoyoursite.net/boula/basma/public/api/setting', httpOptions);
  }

  getSliders(lang: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders().set('content-type', 'application/json').set('Accept-Language', lang)
    }
    return this._HttpClient.get('https://demoyoursite.net/boula/basma/public/api/sliders', httpOptions)
  }

}
