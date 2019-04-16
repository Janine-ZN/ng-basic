import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { Routes, RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormMenuComponent } from './form-menu/form-menu.component';
import { FromReactiveComponent } from './from-reactive/from-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';
const routes: Routes = [
  {
    path: '', component: FormBasicComponent
  }
];

@NgModule({
  declarations: [FormBasicComponent, FormMenuComponent, FromReactiveComponent, FormTemplateComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgZorroAntdModule
  ]
})
export class FormModule { }
