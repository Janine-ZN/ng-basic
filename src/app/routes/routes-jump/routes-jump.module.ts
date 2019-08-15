import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { RoutesJumpComponent } from './routes-jump.component';
import { TagRouterLinkComponent } from './tag-router-link/tag-router-link.component';
import { CodeRouterNavigateComponent } from './code-router-navigate/code-router-navigate.component';

const routes: Routes = [
  {
    path: '', component: RoutesJumpComponent,
    children: [
      {
        path: '', component: TagRouterLinkComponent,
        data: { breadcrumb: '标签路由跳转' }
      },
      {
        path: 'tag-router-link', component: TagRouterLinkComponent,
        data: { breadcrumb: '标签路由跳转' }
      },
      {
        path: 'code-router-navigate', component: CodeRouterNavigateComponent,
        data: { breadcrumb: '代码路由跳转' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    TagRouterLinkComponent,
    CodeRouterNavigateComponent,
    RoutesJumpComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutesJumpModule { }
