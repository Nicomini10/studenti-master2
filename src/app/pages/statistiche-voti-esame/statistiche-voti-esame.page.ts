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

    currentPage = '/statistiche-voti-esame';

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';
    public barChartLabels: string[] = ['2012', '2013', '2014', '20015', '2016', '2017', '2018'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        {data: [20, 24, 22, 30, 27, 19, 26], label: '1°Anno'},
        {data: [21, 24, 28, 20, 27, 30, 19], label: '2°Anno'},
        {data: [23, 25, 29, 23, 30, 22, 26], label: '3°Anno'},
        {data: [21, 23, 26, 24, 28, 30, 22], label: 'Fuori corso'}
    ];

    public lineChartData: Array<any> = [
        {data: [20, 24, 22, 30, 27, 19, 26], label: '1°Anno'},
        {data: [21, 24, 28, 20, 27, 30, 19], label: '2°Anno'},
        {data: [23, 25, 29, 23, 30, 22, 26], label: '3°Anno'},
        {data: [21, 23, 26, 24, 28, 30, 22], label: 'Fuori corso'}
    ];
    public lineChartLabels: Array<any> = ['2012', '2013', '2014', '2015', '2016', '2017', '2018'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            backgroundColor: 'rgba(77, 148, 255, 0.4)',
            borderColor: 'rgba(51, 133, 255, 1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(219,255,4,0.4)',
            borderColor: 'rgb(228,255,40)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            backgroundColor: 'rgba(255,10,60,0.4)',
            borderColor: 'rgb(255,0,10)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            backgroundColor: 'rgba(255,14,223,0.4)',
            borderColor: 'rgb(255,0,211)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },


    ];

    // public randomize(): void {
    //     let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    //     for (let i = 0; i < this.lineChartData.length; i++) {
    //         _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
    //         for (let j = 0; j < this.lineChartData[i].data.length; j++) {
    //             _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
    //         }
    //     }
    //     this.lineChartData = _lineChartData;
    // }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
        this.globalData.goTo(this.currentPage, '/grafico', 'forward', false);
    }

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
                ['1°Anno', 10],
                ['2°Anno', 20],
                ['3°Anno', 50],
                ['Fuori corso', 20]
            ],
            options: {
                'width': 430,
                'height': 300
            }
        };
    }

}
