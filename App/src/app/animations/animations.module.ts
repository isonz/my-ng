import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsRoutingModule } from './animations-routing.module';

import { IndexComponent } from './index.component';
import { OpenCloseComponent } from './open-close.component';
import { OpenClosePageComponent } from './open-close-page.component';
import { OpenCloseChildComponent } from './open-close.component.4';
import { ToggleAnimationsPageComponent } from './toggle-animations-page.component';
import { StatusSliderComponent } from './status-slider.component';
import { StatusSliderPageComponent } from './status-slider-page.component';
import { HeroListPageComponent } from './hero-list-page.component';
import { HeroListGroupPageComponent } from './hero-list-group-page.component';
import { HeroListGroupsComponent } from './hero-list-groups.component';
import { HeroListEnterLeavePageComponent } from './hero-list-enter-leave-page.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto-page.component';
import { HeroListAutoComponent } from './hero-list-auto.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { InsertRemoveComponent } from './insert-remove.component';


@NgModule({
  declarations: [
    IndexComponent,
    StatusSliderComponent,
    OpenCloseComponent,
    OpenCloseChildComponent,
    OpenClosePageComponent,
    StatusSliderPageComponent,
    ToggleAnimationsPageComponent,
    HeroListPageComponent,
    HeroListGroupsComponent,
    HeroListGroupPageComponent,
    HeroListEnterLeavePageComponent,
    HeroListEnterLeaveComponent,
    HeroListAutoCalcPageComponent,
    HeroListAutoComponent,
    HomeComponent,
    InsertRemoveComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule,
  ]
})
export class AnimationsModule { }
