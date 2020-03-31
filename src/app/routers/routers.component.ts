import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.scss'],
  animations: [ slideInAnimation ]
})
export class RoutersComponent implements OnInit {

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  constructor() { }

  ngOnInit() {
  }

}
