import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import * as AOS from 'aos';
import { BehaviorSubject } from 'rxjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noble-smile';

  isLoaded: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(public translate: TranslateService, private localizeService: LocalizeRouterService, ) {
    translate.addLangs(['en', 'ar']);


    document.getElementsByTagName("html")[0].setAttribute("lang", this.translate.getDefaultLang());
    if (this.translate.getDefaultLang() === 'ar') {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
    else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
    }


  }

  public loadedFunction() {
    this.isLoaded.next(false);
  }


  ngOnInit() {
    AOS.init();
  }

  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //     this.spinner.hide();
  //   }, 3000);
  // }


}
