import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../loanservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private rs:LoanserviceService) { }
  public even:boolean=true;
  public allLoans=[];
  ngOnInit() {
    this.allLoans=this.rs.getloans();
  }

}
