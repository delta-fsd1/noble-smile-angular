import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../home.service';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  lang: string = 'en';
  settings:any;
  settingsObject:any = {} ;

  services:any;
  servicesArray:any = [];


  constructor(public _HomeService:HomeService, public translate: TranslateService) {
    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.homeData = response.data;
        this._HomeService.teamArray = response.data.our_team.slice(0, 3)
        this._HomeService.footerServices = response.data.services.slice(0,5);
      }
    });

    this._HomeService.getSettings(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.settingsArray = response.data;
      }
    });

  }

  
  

  ngOnInit(): void {
  }

}
