import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { MemberListComponent } from './components/member-list/member-list.component';


const routes: Routes = [
  { path : 'departments', component : DepartmentListComponent },
  { path : 'members'    , component : MemberListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
