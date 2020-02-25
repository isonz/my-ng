import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'style-app-hero-main',
  template: `
    <style-app-quest-summary></style-app-quest-summary>
    <style-app-hero-details [hero]="hero" [class.active]="hero.active">
      <style-app-hero-controls [hero]="hero"></style-app-hero-controls>
    </style-app-hero-details>
  `
})
export class StyleHeroAppMainComponent {
  @Input() hero: Hero;
}
