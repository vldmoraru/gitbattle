import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { GithubService } from './github-services/github.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LookupComponent } from './lookup/lookup.component';
import { DateCountPipe } from './date-count.pipe';
import { MostactiveComponent } from './mostactive/mostactive.component';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LookupComponent,
    DateCountPipe,
    MostactiveComponent,
    BattleComponent 
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }