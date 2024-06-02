// app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceListComponent } from './DeviceList';
import { DeviceDetailsComponent } from './DeviceDetails';

const routes: Routes = [
  { path: '', component: DeviceListComponent },
  { path: 'device/:id', component: DeviceDetailsComponent }, // Dynamic route for device details
  { path: '**', redirectTo: '/' } // Redirect to home for unknown routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
