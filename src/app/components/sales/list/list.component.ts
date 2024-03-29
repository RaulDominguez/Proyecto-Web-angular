import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../../services/sales/sales.service';

@Component({
  selector: 'app-sales-list',
  templateUrl: './list.component.html',
})

export class ListComponent implements OnInit {

  sales: Array<any>;
  isLoading = false;

  constructor(private SaleService:SalesService) {
    //this.sales = SaleService.sales;
  }

  ngOnInit() {
    this.onFind();
  }

  onFind(){
    this.isLoading= true;
    this.SaleService.find().subscribe((res:any) => {
      this.sales = res.body;
      this.isLoading= false;
    });
  }

  onDelete(id){
    this.SaleService.deleteOne(id).subscribe((res:any) => {
      this.onFind();
    });
  }

}