import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  constructor() { }
  public loans=[];

  addLoan(loan){
    this.loans.push(loan)
    console.log(this.loans)
    
  }

  deleteLoan(id){
    for(let i=0;i<this.loans.length;i++){
      if(this.loans[i].id==id){
        return this.loans.splice(i,1);
        console.log(this.loans)
      }
      return null;
    }
  }

  getloans(){
    return this.loans;
  }
}
