import {Component, Inject, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ActivatedRoute} from '@angular/router';
import {LocalStorageService} from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(
    public translate: TranslateService,
    public route: ActivatedRoute,
    @Inject('LANG_LIST') public langList: Array<string>,
    @Inject('LANG_DEFAULT') public langDefault: string,
    private localStorage: LocalStorageService
  ) { }
  title = 'Tour of Heroes';
  param = {value: 'world'};


  static getQueryString(name: string) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    const r = window.location.search.substr(1).match(reg);
    if (r != null) {return  unescape(r[2]); } return null;
  }


  ngOnInit(): void {
    this.getLang();
  }


  getLang() {
    let lang: string = AppComponent.getQueryString('lang');
    // const expiredTimeMS = 2 * 24 * 60 * 60 * 1000;
    const expiredTimeMS = 10 * 1000;
    if (lang) {
      this.localStorage.set('_lang', lang, expiredTimeMS);
    } else {
      lang = this.localStorage.get('_lang');
      if (lang) {
        this.localStorage.set('_lang', lang, expiredTimeMS);
      } else {
        lang = navigator.language.toLowerCase();
      }
    }
    this.setLang(lang);

    // this.route.queryParams.subscribe(params => {
    //   const l: string = params.lang;
    //   // if (!l) { return false; }
    //   console.log(params);
    //   this.setLang(l);
    // });

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
