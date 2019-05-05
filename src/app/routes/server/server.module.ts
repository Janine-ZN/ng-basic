import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import { SaveWordComponent } from './save-word/save-word.component';
import { ServerComponent } from './server.component';
import { DisplayWordComponent } from './display-word/display-word.component';

const routes: Routes = [
  {
    path: '', component: ServerComponent
  }
];


@NgModule({
  declarations: [SaveWordComponent, ServerComponent, DisplayWordComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class ServerModule { }
