import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from '../loanservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private rs:LoanserviceService,private rb:FormBuilder) { }

  public loanForm=this.rb.group({
    loanid:['',[Validators.required]],
    loanCustomerName:['',[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
    loanAmount:['',[Validators.required]],
    dateOfLoan:['',[Validators.required]],
    tenure:['',[Validators.required]],
    
    rateOfInterest:['',[Validators.required]]
    
  });

  ngOnInit() {
   
  }
  Add(){
    let loan={
      q1:this.loanForm.get("loanid").value,
      q2:this.loanForm.get("loanCustomerName").value,
      q3:this.loanForm.get("loanAmount").value,
      q4:this.loanForm.get("dateOfLoan").value,
      q5:this.loanForm.get("tenure").value,
      q6:this.loanForm.get("crateOfInterest").value,
    }
    this.rs.addLoan(loan);
  }
}
