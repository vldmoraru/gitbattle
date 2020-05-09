import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubService } from './services/github-service/github.service';
import { LoaderService } from './services/loader-service/loader.service';
import { OrderByPipe } from './pipes/order-by.pipe';
import { LoaderInterceptor } from './interceptors/loader-interceptor/loader.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LookupComponent } from './components/lookup/lookup.component';
import { BattleComponent } from './components/battle/battle.component';
import { CoreComponent } from './components/core/core.component';
import { PopularComponent } from './components/popular/popular.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LookupComponent,
    BattleComponent,
    CoreComponent,
    PopularComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    InlineSVGModule.forRoot()
  ],
  providers: [
    GithubService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
