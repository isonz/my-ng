import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {AuthGuard} from './auth/auth.guard';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RoutersComponent} from './routers.component';


const routes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup'
  },
  { path: '', component: RoutersComponent ,
    children: [
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'crisis-center',
        loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.CrisisCenterModule),
        data: { preload: true }
      },
      {
        path: 'superheroes',
        loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
      }
    ]
  },
  // { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [RouterModule]
})
export class RoutersRoutingModule { }
