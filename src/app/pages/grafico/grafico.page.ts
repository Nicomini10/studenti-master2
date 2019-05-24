import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from '../../services/global-data.service';

@Component({
    selector: 'app-grafico',
    templateUrl: './grafico.page.html',
    styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {

    srcPage: string;

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2012', '2013', '2014', '20015', '2016', '2017', '2018'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        {data: [20, 24, 22, 30, 27, 19, 26], label: '1°Anno'},
        {data: [21, 24, 28, 20, 27, 30, 19], label: '2°Anno'},
        {data: [23, 25, 29, 23, 30, 22, 26], label: '3°Anno'},
        {data: [21, 23, 26, 24, 28, 30, 22], label: 'Fuori corso'}
    ];

// events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }


    constructor(public globalData: GlobalDataService) {
    }

    ngOnInit() {

        this.srcPage = this.globalData.srcPage;

    }

}
