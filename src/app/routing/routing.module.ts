import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from '../not-found/not-found.component';
import { LookupComponent } from '../lookup/lookup.component';
import { MostactiveComponent } from '../mostactive/mostactive.component';
import { BattleComponent } from '../battle/battle.component';

const routes:Routes=[
  { path:"",component:LookupComponent },
  { path:"mostactive",component:MostactiveComponent },
  { path:"battle",component:BattleComponent },
  { path:'**',component:NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
