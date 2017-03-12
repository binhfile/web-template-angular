/**
 * @brief Routing table
 * @author visaodumuc
 * @date 2017/03/12
 * 
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import layout
import { SimpleLayoutComponent } from './layout/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
 
export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: FullLayoutComponent,
        data:{
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }
        ]
    },
    {
        path: 'pages',
        component: SimpleLayoutComponent,
        data: {
            title: 'Pages'
        },
        children: [
            {
                path: '',
                loadChildren: './pages/pages.module#PagesModule'
            }
        ]
    }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule{}
/**
 * End of file
 */