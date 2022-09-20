import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../app.component';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  lang: string = 'en';
  doctors: any;
  doctorsArray: any = [];

  constructor(public _HomeService: HomeService, public translate: TranslateService, public loader: AppComponent) {

    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.homeData = response.data;
        this._HomeService.teamContainer = response.data.our_team;
        this.loader.loadedFunction()
      }
    });
  }

  ngOnInit(): void {

  }

}
