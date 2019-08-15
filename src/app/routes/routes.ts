import { HomeComponent } from '../home/page/home.component';
import { PageNotFoundComponent } from './page-not-found/page/page-not-found/page-not-found.component';

export const routes = [
    { path: '', component: HomeComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: '', redirectTo: '/home/directive', pathMatch: 'full',
                data: { breadcrumb: '首页' }
            },
            {
                path: 'news', loadChildren: './news/news.module#NewsModule',
                data: { breadcrumb: '新闻' }
            },
            {
                path: 'directive', loadChildren: './directive/directive.module#DirectiveModule',
                data: { breadcrumb: '指令' }
            },
            {
                path: 'form', loadChildren: './form/form.module#FormModule',
                data: { breadcrumb: '表单' }
            },
            {
                path: 'routers-jump', loadChildren: './routes-jump/routes-jump.module#RoutesJumpModule',
                data: { breadcrumb: '路由' }
            },
            {
                path: 'observable', loadChildren: './observable/observable.module#ObservableModule',
                data: { breadcrumb: 'observable' }
            },
            {
                path: 'server', loadChildren: './server/server.module#ServerModule',
                data: { breadcrumb: '服务' }
            },
            {
                path: 'basic', loadChildren: './basic/basic.module#BasicModule',
                data: { breadcrumb: '基础' }
            },
        ]
    },
    /* {
        path: '**', component: PageNotFoundComponent
    } */
];
