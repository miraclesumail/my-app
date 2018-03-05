import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent }    from './hero-detail/hero-detail.component';
import { HeroSearchComponent }    from './hero-search/hero-search.component';

import { FoodComponent } from './china/food.component';
import { StarComponent } from './china/star.component';

import { AppComponent } from './app.component';
import { HeroesComponent }    from './hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { ChinaComponent} from './china/china.component';
import {beautyDirective} from './directive/bg.directive';

import {CreditCardModule} from './credit-card/credit-card.module';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    FoodComponent,
    StarComponent,
    ChinaComponent,
    beautyDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CreditCardModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
