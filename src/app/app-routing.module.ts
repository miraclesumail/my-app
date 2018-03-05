import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesComponent }    from './hero/hero.component';
import { HeroDetailComponent }    from './hero-detail/hero-detail.component';
import { ChinaComponent} from './china/china.component';
import { FoodComponent } from './china/food.component';
import { StarComponent } from './china/star.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  {path:"china",component:ChinaComponent,
        children:[
            {path:"food",component:FoodComponent},
            {path:"star",component:StarComponent}
        ]
    },
    {
        path:'test', loadChildren:'app/test/test.module#TestModule'
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

