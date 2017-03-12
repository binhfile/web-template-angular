/**
 * @brief
 * @author visaodumuc
 * @date 2017/03/12
 * 
 */
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page404Component } from './404/404.component';

const routes: Routes = [
    {
        path: '',
        data:{
            title: 'Pages'
        },
        children: [
            {
                path: '404',
                component: Page404Component,
                data:{
                    title: 'Page 404'
                }
            }
        ]
    }
];
@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}
/**
 * End of file
 */