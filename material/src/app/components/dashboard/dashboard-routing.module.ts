import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { UsersComponent } from './users/users.component';




const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: InicioComponent  },
    {path: 'users', component: UsersComponent },
    {path: 'create-user', component: CreateUsersComponent },

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
