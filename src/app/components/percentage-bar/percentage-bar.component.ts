import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
    selector: 'percentage-bar',
    templateUrl: './percentage-bar.component.html',
    styleUrls: ['./percentage-bar.component.sass']
})
export class PercentageBarComponent implements OnInit, OnChanges {
    @Input() color = '#cccccc'; // Represents the progress bar color
    @Input() percentage: number;
    @Input() width;
    @Input() height;

    barDimColor; // Lighter background color for progress bar container

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges) {
        for (const propName in changes) {
            if (propName === 'color') {
                this.barDimColor = `#${this.color.slice(1)}33`;
            }
        }
    }

    ngOnInit() {
    }
}
