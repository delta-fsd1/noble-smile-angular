import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { TranslateService } from '@ngx-translate/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noble-smile';


  constructor(private spinner: NgxSpinnerService, public translate: TranslateService, private localizeService: LocalizeRouterService, ) {
    translate.addLangs(['en', 'ar']);
    // translate.setDefaultLang('en');
    
    
      document.getElementsByTagName("html")[0].setAttribute("lang", this.translate.getDefaultLang());
    if (this.translate.getDefaultLang() === 'ar') {
      document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
      // this.langKey = localStorage.setItem("langKey", lang);
    }
    else {
      document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
      // this.langKey = localStorage.setItem("langKey", lang);
    }


  }


  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }


}
