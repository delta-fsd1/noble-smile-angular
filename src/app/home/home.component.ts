import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, NgModel, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AppointmentService } from '../appointment.service';
import { HomeService } from '../home.service';
import { SettingsService } from '../settings.service';







@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lang: string = 'en';
  error: boolean = false;
  success: boolean = false;
  home: any;
  homeArray: any = [];
  teamArray: any = [];
  settings: any;
  settingsArray: any = [];
  servicesArray: any = [];

  constructor(private _AppointmentService: AppointmentService, public _HomeService: HomeService, private _SettingsService: SettingsService, public translate: TranslateService) {
    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.homeData = response.data;
        this._HomeService.teamArray = response.data.our_team.slice(0, 3)
        this._HomeService.servicesArray = response.data.services.slice(0, 4)
      }
    });

    this._HomeService.getSettings(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.settingsArray = response.data;
      }
    });
  }

  appointmentForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    age: new FormControl(null, [Validators.required, Validators.min(6), Validators.max(60)]),
    phone: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.email),
    service: new FormControl(null, Validators.required),
    doctor: new FormControl(null),
    date_time: new FormControl(null, Validators.required),
  });

  submitAppointment(appointmentForm: FormGroup) {
    this._AppointmentService.getAppointment(appointmentForm.value).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
      },
      error: () => {
        this.error = true;
        this.success = false;
      }
    })
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
