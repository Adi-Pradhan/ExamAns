export class Loan {
    constructor(
        public loanId:number,
        public loanCustomerNmae:string,
        public loanAmount:number,
        public dateOfloan:Date,
        public tenure:number,
        public rateOfInterest:number
    ){

    }
   computeInterestAmount(){
      let r=this.rateOfInterest/100;
    var b= (1+(r*this.tenure));
    return (this.loanAmount*b)-this.loanAmount;
   }

   computeEMI(){
        var emi=this.loanAmount*this.rateOfInterest*(this.rateOfInterest+1)*this.tenure
        /((1+this.rateOfInterest)*(this.tenure-1))
        return emi;
   }
}
