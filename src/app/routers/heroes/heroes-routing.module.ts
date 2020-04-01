import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent }    from './hero-list/hero-list.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  // { path: 'hero', redirectTo: '/superheroes' },
  // { path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: '',  component: HeroListComponent, data: { animation: 'heroes' },
    children:[
      // { path: 'hero/:id', redirectTo: '/superhero/:id' },
      { path: 'hero/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
    ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
