import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../loanservice.service';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  constructor(private re:LoanserviceService) { }
 
  ngOnInit() {
  }
  public loan;
  remove(id){
    this.loan=this.re.deleteLoan(id);
  }
}
