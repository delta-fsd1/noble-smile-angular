import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../home.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  lang: string = 'en';

  constructor(public _HomeService: HomeService, private _ActivatedRoute: ActivatedRoute, public translate: TranslateService) {

    this._HomeService.doctorId = this._ActivatedRoute.snapshot.params['id'];
    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.doctorsContainer = response.data.our_team;
        for (let i = 0; i < this._HomeService.doctorsContainer.length; i++) {
          if (this._HomeService.doctorsContainer[i].id == this._HomeService.doctorId) {
            this._HomeService.singleDoctor = this._HomeService.doctorsContainer[i];
          }
        }
      }
    })
  }



  ngOnInit(): void {
    AOS.init();
  }

}
