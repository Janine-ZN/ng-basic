import { HomeComponent } from '../home/page/home.component';
import { PageNotFoundComponent } from './page-not-found/page/page-not-found/page-not-found.component';

export const routes = [
    {
        // 路由为空时，自动重定向到/home
        path: '',
        redirectTo: '/home/basic',
        pathMatch: 'full',
    },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: 'basic', loadChildren: './basic/basic.module#BasicModule',
                data: { breadcrumb: '基础' }
            },
            {
                path: 'directive', loadChildren: './directive/directive.module#DirectiveModule',
                data: { breadcrumb: '指令' }
            },
            {
                path: 'news', loadChildren: './news/news.module#NewsModule',
                data: { breadcrumb: '新闻' }
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
            }
        ]
    },
    /* {
        path: '**', component: PageNotFoundComponent
    } */
];
