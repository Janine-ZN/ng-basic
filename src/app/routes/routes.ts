import { HomeComponent } from '../home/page/home.component';
import { PageNotFoundComponent } from './page-not-found/page/page-not-found/page-not-found.component';

export const routes = [
    { path: '', component: HomeComponent },
    {
        path: 'home', component: HomeComponent,
        children: [
            {
                path: '', redirectTo: '/home/directive', pathMatch: 'full'
            },
            {
                path: 'directive', loadChildren: './directive/directive.module#DirectiveModule'
            },
            {
                path: 'form', loadChildren: './form/form.module#FormModule'
            },
            {
                path: 'observable', loadChildren: './observable/observable.module#ObservableModule'
            },
        ]
    },
    /* {
        path: '**', component: PageNotFoundComponent
    } */
];
