import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from '../../services/global-data.service';

@Component({
    selector: 'app-statistiche-voti-esame',
    templateUrl: './statistiche-voti-esame.page.html',
    styleUrls: ['./statistiche-voti-esame.page.scss'],
})
export class StatisticheVotiEsamePage implements OnInit {

    srcPage: string;
    pieChartData;


    constructor(public globalData: GlobalDataService) {
    }

    ngOnInit() {

        this.srcPage = this.globalData.srcPage;
        this.useAngularLibrary();
    }


    useAngularLibrary() {
        this.pieChartData = {
            chartType: 'PieChart',
            dataTable: [
                ['Languages', 'Percent'],
                ['1°Anno',     20],
                ['2°Anno',      10],
                ['3°Anno',  70]
            ],
            options: {
                'title': 'Superamento Esame',
                'width': 430,
                'height': 300
            }
        };
    }

}
