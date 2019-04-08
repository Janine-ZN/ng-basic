import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObsProxyComponent } from './page/obs-proxy/obs-proxy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ObsProxyComponent
  }
];

@NgModule({
  declarations: [ObsProxyComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ObservableModule { }
