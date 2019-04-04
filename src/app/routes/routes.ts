import { HomeComponent } from '../home/home/home.component';

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
        ]
    }
];
