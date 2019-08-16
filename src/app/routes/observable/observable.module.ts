import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ObsProxyComponent } from './page/obs-proxy/obs-proxy.component';

const routes: Routes = [
  {
    path: '', component: ObsProxyComponent,
    data: { breadcrumb: 'observable' }
  }
];

@NgModule({
  declarations: [ObsProxyComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ObservableModule { }
