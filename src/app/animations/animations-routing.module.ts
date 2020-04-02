import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OpenClosePageComponent} from "./open-close-page.component";
import {StatusSliderPageComponent} from "./status-slider-page.component";
import {ToggleAnimationsPageComponent} from "./toggle-animations-page.component";
import {HeroListPageComponent} from "./hero-list-page.component";
import {HeroListGroupPageComponent} from "./hero-list-group-page.component";
import {HeroListEnterLeavePageComponent} from "./hero-list-enter-leave-page.component";
import {HeroListAutoCalcPageComponent} from "./hero-list-auto-page.component";
import {InsertRemoveComponent} from "./insert-remove.component";
import {HomeComponent} from "./home.component";
import {AboutComponent} from "./about.component";
import {IndexComponent} from "./index.component";


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'enter-leave' },
  { path: '', component: IndexComponent, children: [
      { path: 'open-close', component: OpenClosePageComponent },
      { path: 'status', component: StatusSliderPageComponent },
      { path: 'toggle', component: ToggleAnimationsPageComponent },
      { path: 'heroes', component: HeroListPageComponent, data: {animation: 'FilterPage'} },
      { path: 'hero-groups', component: HeroListGroupPageComponent },
      { path: 'enter-leave', component: HeroListEnterLeavePageComponent },
      { path: 'auto', component: HeroListAutoCalcPageComponent },
      { path: 'insert-remove', component: InsertRemoveComponent},
      { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
      { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
