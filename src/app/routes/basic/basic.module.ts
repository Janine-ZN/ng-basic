import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic.component';
import { ChildrenComponent } from './children/children.component';

const routes: Routes = [
  {
    path: '', component: BasicComponent
  }
];

@NgModule({
  declarations: [BasicComponent, ChildrenComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class BasicModule { }
