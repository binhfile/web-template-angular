/**
 * @brief
 * @author visaodumuc
 * @date 2017/03/12
 * 
 */
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        DashboardRoutingModule
    ],
    declarations: [ DashboardComponent ]
})
export class DashboardModule {}
/**
 * End of file
 */