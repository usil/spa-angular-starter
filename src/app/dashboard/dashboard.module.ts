import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashBoardMaterials } from './material/material.module';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [DashboardComponent, FormsComponent, TablesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashBoardMaterials,
    FormsModule,
  ],
})
export class DashboardModule {}
