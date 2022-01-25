import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './admin-dashboard/sidebar/sidebar.component';
import { HeaderComponent } from './admin-dashboard/header/header.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ViewComponent } from './doctor/view/view.component';
import { AddComponent } from './doctor/add/add.component';
import { FormsModule } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Progress_cardComponent } from 'src/utilities/progress_card/progress_card.component';
import { DoctorService } from './services/doctor.service';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CardComponent } from './dashboard-home/card/card.component';
import { ReportsComponent } from './reports/reports.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    DoctorComponent,
    ViewComponent,
    AddComponent,
    Progress_cardComponent,
    DashboardHomeComponent,
    CardComponent,
    ReportsComponent,
    PatientComponent
  ],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  providers: [NgxImageCompressService,DoctorService],
})
export class AdminModule {}
