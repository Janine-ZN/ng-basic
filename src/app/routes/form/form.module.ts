import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormBasicComponent } from './form-basic/form-basic.component';
import { FormMenuComponent } from './form-menu/form-menu.component';
import { FromReactiveComponent } from './from-reactive/from-reactive.component';
import { FormTemplateComponent } from './form-template/form-template.component';
import { GenderPipe } from 'src/app/core/pipe/gender.pipe';

const routes: Routes = [
  {
    path: '', component: FormBasicComponent
  }
];

@NgModule({
  declarations: [
    FormBasicComponent,
    FormMenuComponent,
    FromReactiveComponent,
    FormTemplateComponent,
    GenderPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class FormModule { }
