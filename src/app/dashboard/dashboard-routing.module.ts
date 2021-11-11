import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'forms', component: FormsComponent },
      { path: 'tables', component: TablesComponent },
      { path: '', redirectTo: 'forms', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
