import { Injectable } from '@angular/core';
import { HEROES }     from './mock-heroes';
import { Logger }     from '../logger.service';
import { DUserService } from '../user.service';

@Injectable({
  providedIn: 'root',
  useFactory: (logger: Logger, userService: DUserService) =>
      new HeroService(logger, userService.user.isAuthorized),
  deps: [Logger, DUserService],
})
export class HeroService {
  constructor(
    private logger: Logger,
    private isAuthorized: boolean) { }

  getHeroes() {
    let auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}
