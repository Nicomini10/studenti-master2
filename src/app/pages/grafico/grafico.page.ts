import { Component, OnInit } from '@angular/core';
import {GlobalDataService} from '../../services/global-data.service';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.page.html',
  styleUrls: ['./grafico.page.scss'],
})
export class GraficoPage implements OnInit {

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
        ['1°Anno',     10],
        ['2°Anno',      30],
        ['3°Anno',  60]
      ],
      options: {
        'title': 'Superamento Esame',
        'width': 430,
        'height': 330,
      }
    };
  }

  onGoBack()  {
    this.globalData.goTo(this.globalData.srcPage, this.globalData.srcPage, 'backward', false);

  }

}
