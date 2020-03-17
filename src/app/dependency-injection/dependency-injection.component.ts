import {Component, Inject, OnInit} from '@angular/core';

import { APP_CONFIG, AppConfig } from '../app.config';
import { DUserService } from './user.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  title: string;

  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
    private userService: DUserService) {
    this.title = config.title;
  }

  get isAuthorized() { return this.user.isAuthorized; }
  nextUser()         { this.userService.getNewUser(); }
  get user()         { return this.userService.user; }

  get userInfo()     {
    return `Current user, ${this.user.name}, is ` +
      `${this.isAuthorized ? '' : 'not'} authorized. `;
  }


  ngOnInit() {
  }

}
