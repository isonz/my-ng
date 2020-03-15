import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import {StyleHeroAppComponent} from "./component-styles/hero-app.component";
import {ReactiveFormsComponent} from "./forms/reactive/reactive-forms.component";
import {PipesComponent} from "./pipes/pipes.component";
import {StructuralDirectivesComponent} from "./directives/structural-directives/structural-directives.component";
import {AttributeDirectivesComponent} from "./directives/attribute-directives/attribute-directives.component";
import {AppPopupComponent} from "./popup/app-popup.component";
import {DynamicComponentComponent} from "./dynamic-component/dynamic-component.component";
import {MessagesComponent} from "./messages/messages.component";
import {HeroFormComponent} from "./forms/hero-form/hero-form.component";
import {HeroFormReactiveComponent} from "./forms/validation/reactive/hero-form-reactive.component";
import {HeroFormTemplateComponent} from "./forms/validation/template/hero-form-template.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },

  { path: 'messages', component: MessagesComponent },
  { path: 'styles', component: StyleHeroAppComponent },

  { path: 'ad-banner', component: DynamicComponentComponent },
  { path: 'popup', component: AppPopupComponent },
  { path: 'directives/attribute', component: AttributeDirectivesComponent },
  { path: 'directives/structural', component: StructuralDirectivesComponent },

  { path: 'app-pip', component: PipesComponent },

  { path: 'forms/reactive', component: ReactiveFormsComponent },
  { path: 'forms/template', component: HeroFormComponent },

  { path: 'forms/validation/reactive', component: HeroFormReactiveComponent },
  { path: 'forms/validation/template', component: HeroFormTemplateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
