import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../components/components.module';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeComponent } from './time/time.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AdminComponent,
    TablesComponent,
    IconsComponent,
    UserProfileComponent,
    DashboardComponent,
    TimeComponent,
    ModalComponent

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    ClipboardModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
  ],
  entryComponents:[
    ModalComponent
  ]
})
export class AdminModule { }
