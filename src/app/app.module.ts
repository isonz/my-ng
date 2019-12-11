import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
    {provide: 'LANG_DEFAULT', useValue: 'en-us'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

  constructor(
    public translate: TranslateService,
    public route: ActivatedRoute,
    @Inject('LANG_LIST') public langList: Array<string>,
    @Inject('LANG_DEFAULT') public langDefault: string
  ) {

    this.getLang();

  }

  getLang() {
    let lang: any = navigator.language.toLowerCase();
    this.route.queryParamMap.subscribe(params => {
      const l: string = params.get('lang');
      if (l) { lang = l; }

      console.log(lang);


    });
    this.setLang(lang);
  }

  setLang(lang: string) {
    console.log(lang);
    if (this.langList.indexOf(lang) > -1) {
      // translate.setDefaultLang(lang);
      this.translate.use(lang);
    } else {
      this.translate.use(this.langDefault);
    }
  }

}
