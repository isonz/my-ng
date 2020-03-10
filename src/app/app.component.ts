import {Component, Injector, OnInit} from '@angular/core';

// dynamic-component
import { AdService }         from './dynamic-component/ad.service';
import { AdItem }            from './dynamic-component/ad-item';

// popup
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup/popup.service';
import { PopupComponent } from './popup/popup.component';

// 结构型指令
import { Hero, heroes } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ads: AdItem[];

  color: string;

  constructor(
    private adService: AdService,
    injector: Injector,
    public popup: PopupService
  ) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }



  // 结构型指令
  heroes = heroes;
  hero = this.heroes[0];
  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';
  trackById(index: number, hero: Hero): number { return hero.id; }

}
