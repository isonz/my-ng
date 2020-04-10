import { Component, OnInit } from '@angular/core';
import { AdService }         from './ad.service';
import { AdItem }            from './ad-item';


@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss']
})
export class DynamicComponentComponent implements OnInit {

  ads: AdItem[];

  constructor(
    private adService: AdService,
  ) {

  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
