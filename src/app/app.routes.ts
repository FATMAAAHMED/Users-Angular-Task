import { Routes } from '@angular/router';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModel } from '@angular/forms';
import Module from 'module';
import { NgModule } from '@angular/core';

// NgModule({
//   imports: [
//     HttpClientModule,
//   ]
// })
export const routes: Routes = [
  { path: '', redirectTo: '/all-users', pathMatch: 'full' }, //default route
  { path: 'all-users', component: AllUsersComponent },
  {path:'userDetails/:id', component: UserDetailsComponent}
];



