import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ListComponent} from './pages/list/list.component';
import {AboutComponent} from './pages/about/about.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'list', component: ListComponent, canActivate: [AuthGuard]},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
