/* tslint:disable:one-line */
import { HeroService } from './hero.service';
import { Logger }      from '../logger.service';
import { DUserService } from '../user.service';

let heroServiceFactory = (logger: Logger, userService: DUserService) => {
  return new HeroService(logger, userService.user.isAuthorized);
};

export let heroServiceProvider =
  { provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [Logger, DUserService]
  };
