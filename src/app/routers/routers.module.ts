import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutersRoutingModule } from './routers-routing.module';
import {RoutersComponent} from "./routers.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ComposeMessageComponent} from "./compose-message/compose-message.component";
import {HeroesModule} from "./heroes/heroes.module";
import {AuthModule} from "./auth/auth.module";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RoutersComponent,
    ComposeMessageComponent,
    PageNotFoundComponent
  ],
  imports: [
    // HeroesModule,
    FormsModule,
    AuthModule,
    CommonModule,
    RoutersRoutingModule
  ]
})
export class RoutersModule {

  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }

}
