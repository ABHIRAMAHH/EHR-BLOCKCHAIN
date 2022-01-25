import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardComponent,
    children: [{ path: 'doctor-dashboard', component: DashboardHomeComponent }],
  },
  {
    path: '',
    component: DoctorDashboardComponent,
    redirectTo: 'doctor/doctor-dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorRoutingModule {}
