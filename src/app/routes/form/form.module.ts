import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: FormBasicComponent
  }
];

@NgModule({
  declarations: [FormBasicComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class FormModule { }
