import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { LocationStrategy,
  HashLocationStrategy }         from '@angular/common';
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

// network
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// component-styles
import { StyleHeroAppComponent } from './component-styles/hero-app.component';
import { StyleHeroAppMainComponent } from './component-styles/hero-app-main.component';
import { StyleHeroDetailsComponent } from './component-styles/hero-details.component';
import { StyleHeroControlsComponent } from './component-styles/hero-controls.component';
import { StyleQuestSummaryComponent } from './component-styles/quest-summary.component';
import { StyleHeroTeamComponent } from './component-styles/hero-team.component';

// dynamic-component
import { HeroJobAdComponent }   from './dynamic-component/hero-job-ad.component';
import { AdBannerComponent }    from './dynamic-component/ad-banner.component';
import { HeroProfileComponent } from './dynamic-component/hero-profile.component';
import { AdDirective }          from './dynamic-component/ad.directive';
import { AdService }            from './dynamic-component/ad.service';

// popup  // Include the `PopupService` provider, but exclude `PopupComponent` from compilation, because it will be added dynamically.
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { AppPopupComponent } from './popup/app-popup.component';
import { PopupService } from './popup/popup.service';

// 属性型指令
import { HighlightDirective } from './directives/attribute-directives/highlight.directive';

// 结构型指令
import { heroSwitchComponents } from './hero-switch.components';
import { UnlessDirective }    from './unless.directive';

// pipes
import { PipesComponent } from './pipes/pipes.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './pipes/flying-heroes.component';
import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './pipes/flying-heroes.pipe';
import { HeroAsyncMessageComponent } from './pipes/hero-async-message.component';
import { HeroBirthdayComponent } from './pipes/hero-birthday1.component';
import { HeroBirthday2Component } from './pipes/hero-birthday2.component';
import { HeroListComponent } from './pipes/hero-list.component';
import { PowerBoostCalculatorComponent } from './pipes/power-boost-calculator.component';
import { PowerBoosterComponent } from './pipes/power-booster.component';


// reactive forms
import { ReactiveFormsModule } from '@angular/forms';
import { NameEditorComponent } from './forms/reactive/name-editor/name-editor.component';
import { ProfileEditorComponent } from './forms/reactive/profile-editor/profile-editor.component';
import { ReactiveFormsComponent } from './forms/reactive/reactive-forms.component';


import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';

import { HeroFormComponent } from './forms/hero-form/hero-form.component';

// form Validator
import { HeroFormTemplateComponent } from './forms/validation/template/hero-form-template.component';
import { HeroFormReactiveComponent } from './forms/validation/reactive/hero-form-reactive.component';
import { ForbiddenValidatorDirective } from './forms/validation/shared/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './forms/validation/shared/identity-revealed.directive';
import { UniqueAlterEgoValidatorDirective } from './forms/validation/shared/alter-ego.directive';


import { FormsDynamicComponent } from './forms/dynamic/forms-dynamic.component';
import { DynamicFormComponent }         from './forms/dynamic/dynamic-form.component';
import { DynamicFormQuestionComponent } from './forms/dynamic/dynamic-form-question.component';

/* Feature Modules */
import { ContactModule } from './ng-modules/contact/contact.module';
import { GreetingModule } from './ng-modules/greeting/greeting.module';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';



import { APP_CONFIG, HERO_DI_CONFIG }    from './app.config';
import { CarComponent } from './dependency-injection/car/car.component';
import { DHeroesComponent } from './dependency-injection/heroes/heroes.component';
import { HeroesTspComponent } from './dependency-injection/heroes/heroes-tsp.component';
import { DHeroListComponent } from './dependency-injection/heroes/hero-list.component';
import { InjectorComponent } from './dependency-injection/injector.component';
import { Logger } from './dependency-injection/logger.service';
import { DTestComponent } from './dependency-injection/test.component';
import { DUserService } from './dependency-injection/user.service';
import { ProvidersModule } from './dependency-injection/providers.module';
import { DiInActionComponent } from './di-in-action/di-in-action.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


import { HeroData }                     from './di-in-action/hero-data';
import { InMemoryWebApiModule }         from 'angular-in-memory-web-api';
import { HeroBioComponent }             from './di-in-action/hero-bio.component';
import { HeroBiosComponent,
  HeroBiosAndContactsComponent } from './di-in-action/hero-bios.component';
import { HeroOfTheMonthComponent }      from './di-in-action/hero-of-the-month.component';
import { HeroContactComponent }         from './di-in-action/hero-contact.component';
import { HeroesBaseComponent,
  SortedHeroesComponent }        from './di-in-action/sorted-heroes.component';
import { ParentFinderComponent,
  AlexComponent,
  AliceComponent,
  CarolComponent,
  ChrisComponent,
  CraigComponent,
  CathyComponent,
  BarryComponent,
  BethComponent,
  BobComponent }                 from './di-in-action/parent-finder.component';
import { StorageComponent }             from './di-in-action/storage.component';
import { HttpComponent } from './http/http.component';
const declarations = [
  HeroBiosComponent, HeroBiosAndContactsComponent, HeroBioComponent,
  HeroesBaseComponent, SortedHeroesComponent,
  HeroOfTheMonthComponent, HeroContactComponent,
  ParentFinderComponent,
];
const a_components = [AliceComponent, AlexComponent ];
const b_components = [ BarryComponent, BethComponent, BobComponent ];
const c_components = [
  CarolComponent, ChrisComponent, CraigComponent,
  CathyComponent
];


// http
import { HttpClientXsrfModule } from '@angular/common/http';
import { RequestCache, RequestCacheWithMap } from './http/request-cache.service';
import { AuthService }          from './http/auth.service';
import { ConfigComponent }      from './http/config/config.component';
import { DownloaderComponent }  from './http/downloader/downloader.component';
import { HttpErrorHandler }     from './http/http-error-handler.service';
import { HttpMessageService }       from './http/http-message.service';
import { PackageSearchComponent } from './http/package-search/package-search.component';
import { UploaderComponent }    from './http/uploader/uploader.component';
import { httpInterceptorProviders } from './http/http-interceptors/index';
import {RoutersModule} from "./routers/routers.module";
import {AnimationsModule} from "./animations/animations.module";
import {DefaultComponent} from "./default/default.component";



@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
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

    DynamicComponentComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,

    PopupComponent,
    AppPopupComponent,

    AttributeDirectivesComponent,
    HighlightDirective,

    heroSwitchComponents,
    UnlessDirective,

    // pipes
    PipesComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    HeroListComponent,
    PowerBoosterComponent,
    PowerBoostCalculatorComponent,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
    ExponentialStrengthPipe,


    NameEditorComponent,
    ProfileEditorComponent,
    ReactiveFormsComponent,
    StructuralDirectivesComponent,
    AttributeDirectivesComponent,
    DynamicComponentComponent,


    HeroFormComponent,

    // form validator
    HeroFormTemplateComponent,
    HeroFormReactiveComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,


    FormsDynamicComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    NgModulesComponent,
    DependencyInjectionComponent,

    DependencyInjectionComponent,
    CarComponent,
    DHeroesComponent,
    HeroesTspComponent,
    DHeroListComponent,
    InjectorComponent,
    DTestComponent,
    DiInActionComponent,

    declarations,
    a_components,
    b_components,
    c_components,
    StorageComponent,
    HttpComponent,


    ConfigComponent,
    DownloaderComponent,
    HeroesComponent,
    MessagesComponent,
    UploaderComponent,
    PackageSearchComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    }),

    ContactModule,
    GreetingModule.forRoot({userName: 'Miss Marple'}),

    ProvidersModule,

    InMemoryWebApiModule.forRoot(HeroData),

    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
    }),

    RoutersModule,

    AnimationsModule,

  ],
  providers: [
    {provide: 'LANG_LIST', useValue: ['en-us', 'zh-cn', 'zh-hk']},
    {provide: 'LANG_DEFAULT', useValue: 'en-us'},
    AdService,
    PopupService,

    Logger,
    DUserService,
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG },
    { provide: LocationStrategy, useClass: HashLocationStrategy },

    AuthService,
    HttpErrorHandler,
    HttpMessageService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders,
  ],
  exports: [ CarComponent, DHeroesComponent ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent, PopupComponent ],
  bootstrap: [AppComponent]
})

export class AppModule {

}
