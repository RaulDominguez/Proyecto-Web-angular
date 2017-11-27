import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private salesService: SalesService) {

    this.sales = this.salesService.sales;
    this.sale = this.salesService.sale;

  }

  ngOnInit() {
  }


sale: Array<any>;
sales: Array<any>;
}
