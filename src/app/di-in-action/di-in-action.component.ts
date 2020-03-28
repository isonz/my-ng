import { Component, OnInit } from '@angular/core';
import { LoggerService }      from './logger.service';
import { UserContextService } from './user-context.service';
import { UserService }        from './user.service';


@Component({
  selector: 'app-di-in-action',
  templateUrl: './di-in-action.component.html',
  styleUrls: ['./di-in-action.component.scss']
})
export class DiInActionComponent implements OnInit {

  private userId = 1;

  constructor(logger: LoggerService, public userContext: UserContextService) {
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }


  ngOnInit() {
  }

}
