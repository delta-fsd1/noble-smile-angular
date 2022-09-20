import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  lang: string = 'en';
  services: any;
  servicesArray: any = [];


  constructor(public _HomeService: HomeService, public translate: TranslateService,public loader: AppComponent) {
    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.homeData = response.data;
        this._HomeService.servicesContainer = response.data.services;
        this.loader.loadedFunction()
      }
    });

    this._HomeService.getSettings(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.settingsArray = response.data;
        this.loader.loadedFunction()
      }
    });
  }

  ngOnInit(): void {
  }

}
