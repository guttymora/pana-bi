import {Component, OnInit} from '@angular/core';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DAYS_OF_WEEK = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
    currentDate;
    currentWeek = [];
    currentMonth: string;

    constructor() {
    }

    ngOnInit() {
        this.currentDate = new Date();
        this.currentMonth = this.getMonthName(this.currentDate.getMonth());
        this.getCurrentWeek();
    }

    getCurrentWeek() {
        const now = new Date(this.currentDate);
        const distance = 1 - now.getDay();
        now.setDate(now.getDate() + distance);

        for (let i = 0; i < 7; i++) {
            this.currentWeek.push({
                dayOfWeek: this.getDayOfWeek(now.getDay()),
                dayOfMonth: now.getDate()
            });

            now.setDate(now.getDate() + 1);
        }

        console.log(this.currentWeek);
    }

    getMonthName(monthNumber) {
        return MONTHS[monthNumber];
    }

    getDayOfWeek(dayNumber) {
        return DAYS_OF_WEEK[dayNumber];
    }
}
