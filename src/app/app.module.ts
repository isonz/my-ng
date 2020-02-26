import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

import { StyleHeroAppComponent } from './component-styles/hero-app.component';
import { StyleHeroAppMainComponent } from './component-styles/hero-app-main.component';
import { StyleHeroDetailsComponent } from './component-styles/hero-details.component';
import { StyleHeroControlsComponent } from './component-styles/hero-controls.component';
import { StyleQuestSummaryComponent } from './component-styles/quest-summary.component';
import { StyleHeroTeamComponent } from './component-styles/hero-team.component';

import { HeroJobAdComponent }   from './dynamic-component/hero-job-ad.component';
import { AdBannerComponent }    from './dynamic-component/ad-banner.component';
import { HeroProfileComponent } from './dynamic-component/hero-profile.component';
import { AdDirective }          from './dynamic-component/ad.directive';
import { AdService }            from './dynamic-component/ad.service';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,

    StyleHeroAppComponent,
    StyleHeroAppMainComponent,
    StyleHeroDetailsComponent,
    StyleHeroControlsComponent,
    StyleQuestSummaryComponent,
    StyleHeroTeamComponent,

    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    {provide: 'LANG_LIST', useValue: ['en-us', 'zh-cn', 'zh-hk']},
    {provide: 'LANG_DEFAULT', useValue: 'en-us'},
    AdService
  ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor() { }

}
