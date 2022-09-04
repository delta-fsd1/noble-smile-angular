import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorComponent } from './doctor/doctor.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BackgroundColorDirective } from './background-color.directive';
import { NgxSpinnerModule } from 'ngx-spinner';

import { routes } from './app-routing.module';
import {LocalizeRouterModule} from '@gilsdav/ngx-translate-router';
import { LocalizeParser, LocalizeRouterSettings, ManualParserLoader } from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    TeamComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    DoctorComponent,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: (translate: TranslateService, location: Location, settings: LocalizeRouterSettings) =>
            new ManualParserLoader(translate, location, settings, ['en','ar']),
        deps: [TranslateService, Location, LocalizeRouterSettings]
      }
    })
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: "en-US"
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
