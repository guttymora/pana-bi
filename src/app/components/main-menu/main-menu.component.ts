import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent implements OnInit {
    @Input() items = [];

    constructor() {
    }

    ngOnInit() {
    }
}
