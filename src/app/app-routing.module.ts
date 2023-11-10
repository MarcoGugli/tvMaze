import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListShowComponent } from './list-show/list-show.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'list-show/:title', component: ListShowComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home'},
  // { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
