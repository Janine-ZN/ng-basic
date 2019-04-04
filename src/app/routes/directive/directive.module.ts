import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DirectiveBasicComponent } from './page/directive-basic/directive-basic.component';

const routes: Routes = [
  {
    path: '', component: DirectiveBasicComponent
  }
];

@NgModule({
  declarations: [DirectiveBasicComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class DirectiveModule { }
