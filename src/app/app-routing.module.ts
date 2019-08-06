import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'departments', component  : DepartmentListComponent },
  { path : 'departments/:id', component : DepartmentDetailComponent},
  { path : 'members'    , component  : MemberListComponent },
  { path : 'users'      , redirectTo : 'departments', pathMatch : "full" },
  { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RouterComponents = [
  DepartmentListComponent,
  DepartmentDetailComponent,
  MemberListComponent,
  PageNotFoundComponent
]
