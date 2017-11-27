import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private salesService: SalesService) {

    this.sales = this.salesService.sales;

  }

  ngOnInit() {
  }
  sales: Array<any>;
  sale: {
    order: "",
    date: "",
    total: "",
    client: {name:"", lastName:"", email:""},
    items: {id:"", name:"", brand:"", provider:"", quantity:"", price:""},
    address: {street:"", city:"", zip:""}
  };

}
