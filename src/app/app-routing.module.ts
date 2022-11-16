import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { DetailsPageComponent } from './component/details-page/details-page.component';

const routes: Routes = [
  { path: '', component: EmployeeFormComponent },
  { path: 'form', component: EmployeeFormComponent },
  { path: 'details', component: DetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
