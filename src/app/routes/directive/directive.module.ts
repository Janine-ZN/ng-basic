import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
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
    SharedModule
  ]
})
export class DirectiveModule { }
