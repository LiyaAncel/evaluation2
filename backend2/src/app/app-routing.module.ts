import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path: 'profile', component:ProfileComponent, canActivate:[AuthGuard]},
  {path:'', component:LoginComponent},
  {path:'**', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
