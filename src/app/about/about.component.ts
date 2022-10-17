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
  about: any;
  servicesArray: any = [];

  constructor(public _HomeService: HomeService, public translate: TranslateService) {

    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.footerServices = response.data.services.slice(0, 5);
        this._HomeService.homeData = response.data.testimonials;
      }
    });

    this._HomeService.getAboutData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.aboutContainer = response.data.about;
        this._HomeService.missionArray = response.data.mission;
        this._HomeService.visionArray = response.data.vision;
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
