import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {MainMenuModule} from '../../components/main-menu/main-menu.module';
import {PercentageBarModule} from '../../components/percentage-bar/percentage-bar.module';


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        MainMenuModule,
        PercentageBarModule,
        DashboardRoutingModule
    ],
    exports: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
