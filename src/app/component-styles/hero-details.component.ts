import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'style-app-hero-details',
  template: `
    <h2>{{hero.name}}</h2>
    <style-app-hero-team [hero]=hero></style-app-hero-team>
    <ng-content></ng-content>
  `,
  styleUrls: ['./hero-details.component.css']
})
export class StyleHeroDetailsComponent {
  @Input() hero: Hero;
}
