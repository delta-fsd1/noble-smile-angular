import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { HomeService } from '../home.service';
import { SettingsService } from '../settings.service';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';





@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  settingsArray: any = [];
  langKey: any;


  homeContainer: any;
  homeArray: any = [];

  constructor(private _Router: Router,
    private settings: SettingsService, @Inject(LOCALE_ID) public activeLocale: string,
    public _HomeService: HomeService, public translate: TranslateService, private localize: LocalizeRouterService,
    private _ActivatedRoute: ActivatedRoute) {

  }


  switchLang(lang: string) {
    // this.localize.translateRoute(lang)
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.localize.changeLanguage(lang);
    document.getElementsByTagName("html")[0].setAttribute("lang", lang);
    if (lang === 'ar') {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      // this.langKey = localStorage.setItem("langKey", lang);
    }
    else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      // this.langKey = localStorage.setItem("langKey", lang);
    }
    this._HomeService.getHomeData(lang).subscribe({
      next: (response) => {
        this._HomeService.homeData = response.data;
        this._HomeService.aboutArray = response.data.about_page;
        this._HomeService.teamArray = response.data.our_team.slice(0, 3);
        this._HomeService.servicesArray = response.data.services.slice(0, 4);
        this._HomeService.servicesContainer = response.data.services;
        this._HomeService.footerServices = response.data.services.slice(0, 5);
        this._HomeService.teamContainer = response.data.our_team;
        this._HomeService.doctorsContainer = response.data.our_team;
        for (let i = 0; i < this._HomeService.doctorsContainer.length; i++) {
          if (this._HomeService.doctorsContainer[i].id == this._HomeService.doctorId) {
            this._HomeService.singleDoctor = this._HomeService.doctorsContainer[i];
          }
        }
      }
    });

    this._HomeService.getSettings(lang).subscribe({
      next: (response) => {
        this._HomeService.settingsArray = response.data;
      }
    });
  }


  ngOnInit(): void {
    this._Router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    })
  }

}
