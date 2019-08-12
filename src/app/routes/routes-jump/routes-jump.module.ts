import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagRouterLinkComponent } from './tag-router-link/tag-router-link.component';
import { CodeRouterNavigateComponent } from './code-router-navigate/code-router-navigate.component';

@NgModule({
  declarations: [TagRouterLinkComponent, CodeRouterNavigateComponent],
  imports: [
    CommonModule
  ]
})
export class RoutesJumpModule { }
