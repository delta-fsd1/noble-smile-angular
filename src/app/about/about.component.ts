import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // lang: string = TranslateService.getDefaultLang();
  about: any;
  servicesArray: any = [];

  constructor(public _HomeService: HomeService, public translate: TranslateService) {

    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        // this._HomeService.homeData = response.data;
        this._HomeService.aboutArray = response.data.about_page;
        // this._HomeService.teamArray = response.data.our_team.slice(0, 3);
        // this._HomeService.servicesContainer = response.data.services;
        this._HomeService.footerServices = response.data.services.slice(0, 5);
      }
    });

    this._HomeService.getSettings(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.settingsArray = response.data;
      }
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  ngOnInit(): void {
  }

}
