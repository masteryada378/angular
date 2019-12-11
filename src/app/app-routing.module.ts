import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TablesComponent } from './admin/tables/tables.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { IconsComponent } from './admin/icons/icons.component';
import { AdminComponent } from './admin/admin.component';
import { TimeComponent } from './admin/time/time.component';
import { AuthGuard } from './shared/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'admin', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children: [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'tables', component: TablesComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'time', component: TimeComponent},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
