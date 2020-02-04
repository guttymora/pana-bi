import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainMenuComponent} from './main-menu.component';


@NgModule({
    declarations: [
        MainMenuComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MainMenuComponent
    ]
})
export class MainMenuModule {
}
