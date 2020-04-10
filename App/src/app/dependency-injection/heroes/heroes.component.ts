import { Component }          from '@angular/core';
import { heroServiceProvider } from './hero.service.provider';

@Component({
  selector: 'di-app-heroes',
  providers: [ heroServiceProvider ],
  template: `
    <h2>Heroes</h2>
    <di-app-hero-list></di-app-hero-list>
  `
})
export class DHeroesComponent { }
