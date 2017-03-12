/**
 * @brief
 * @author visaodumuc
 * @date 2017/03/12
 * 
 */
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { Page404Component } from './404/404.component';

@NgModule({
    imports: [
        PagesRoutingModule
    ],
    declarations: [ 
        Page404Component
    ]
})
export class PagesModule {}
/**
 * End of file
 */