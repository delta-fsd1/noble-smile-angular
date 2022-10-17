import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-slider-page',
  templateUrl: './slider-page.component.html',
  styleUrls: ['./slider-page.component.css']
})
export class SliderPageComponent implements OnInit {

  constructor(public _HomeService: HomeService, private _ActivatedRoute: ActivatedRoute, public translate: TranslateService) {

    this._HomeService.slidersId = this._ActivatedRoute.snapshot.params['id'];
    this._HomeService.getSliders(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.slidersContainer = response.data.sliders;
        for (let i = 0; i < this._HomeService.slidersContainer.length; i++) {
          if (this._HomeService.slidersContainer[i].id == this._HomeService.slidersId) {
            this._HomeService.singleSlider = this._HomeService.slidersContainer[i];
          }
        }
      }
    })
  }

  ngOnInit(): void {
  }

}
