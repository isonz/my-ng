import {Component, OnInit} from '@angular/core';

import { AdService }         from './dynamic-component/ad.service';
import { AdItem }            from './dynamic-component/ad-item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
