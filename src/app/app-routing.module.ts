import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { LookupComponent } from './components/lookup/lookup.component';
import { BattleComponent } from './components/battle/battle.component';
import { PopularComponent } from './components/popular/popular.component';
import { CoreComponent } from './components/core/core.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'battle',
        component: BattleComponent
      },
      {
        path: 'lookup',
        component: LookupComponent
      },
      {
        path: 'popular',
        component: PopularComponent
      },
      {
        path: '',
        redirectTo: '/battle',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
