import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AddnewairlinesComponent } from './manageairlines/addnewairlines/addnewairlines.component';
import { ManageairlinesComponent } from './manageairlines/manageairlines.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', component:LoginComponent},
  { path:'login', component:LoginComponent},
  { path:'register',component:RegisterComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'manageairlines', component:ManageairlinesComponent},
  { path:'addnewairlines', component:AddnewairlinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
