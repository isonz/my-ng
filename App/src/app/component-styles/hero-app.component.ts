import { Component, HostBinding } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'style-app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <style-app-hero-main [hero]="hero"></style-app-hero-main>
  `,
  styles: ['h1 { font-weight: normal; }']
})
export class StyleHeroAppComponent {
  hero = new Hero(
    'Human Torch',
    ['Mister Fantastic', 'Invisible Woman', 'Thing']
  );

  @HostBinding('class') get themeClass() {
    return 'theme-light';
  }
}
