import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from '../contact.service';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _ContactService: ContactService, public _HomeService: HomeService, public translate: TranslateService) {
    this._HomeService.getHomeData(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.homeData = response.data;
        this._HomeService.servicesArray = response.data.services.slice(0, 5)
      }
    });

    this._HomeService.getSettings(this.translate.getDefaultLang()).subscribe({
      next: (response) => {
        this._HomeService.settingsArray = response.data;
      }
    });
  }
  error: boolean = false;
  success: boolean = false;
  formError: boolean = false;


  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(12)]),
    email: new FormControl(null, Validators.email),
    phone: new FormControl(null, [Validators.required, Validators.maxLength(40)]),
    message: new FormControl(null, [Validators.required])
  })

  submitContactForm(contactForm: FormGroup) {
    if (contactForm.valid) {
      this._ContactService.sendMessage(contactForm.value).subscribe({
        next: () => {
          this.success = true;
          this.error = false;
          contactForm.reset();
          this.formError = false;
        },
        error: () => {
          this.error = true;
          this.success = false;
        }
      })
    } else {
      this.formError = true;
      this.error = false;
      this.success = false;
    }
  }



  ngOnInit(): void {
  }


}
