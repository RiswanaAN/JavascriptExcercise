class BankAccount{
    constructor(fname, sname, balance, acNumber){
        this.fname= fname;
        this.sname= sname;
        this.acNumber= acNumber;
        this.balance= balance;
        
    }
    
    showBalance(){
        console.log("A/C Balance:  "+this.balance);
    }
    depositMoney(deposit){
        this.balance= this.balance+ deposit;
        console.log("Successfully deposited");
        this.showBalance();
        
    }
    withdrawMoney(withdraw){
        if(withdraw > this.balance){
            console.log("Insufficient balance");
        }
 
       else{
            this.balance= this.balance- withdraw;
            console.log("Successfully withdrawn");
            this.showBalance();
        }
    }
    transferMoney(account, amount){
      if(amount<= this.balance && amount> 0){
        account.balance= account.balance+ amount;
        this.balance= this.balance- amount;
        console.log("Successfully transferred");
        this.showBalance();
        
      }
      else{
        console.log("Insufficient Balance!!!");
      }
    }


}
//using prototype
BankAccount.prototype.acDetails= function(){
    let fullName= this.fname + " " +this.sname;
    console.log("A/C Holder Name: "+fullName);
    console.log("A/C number:   "+this.acNumber);
    console.log("A/C Balance:  "+this.balance);
}

let ac1= new BankAccount("Riswana", "Nas", 5000, 125000044671452);
ac1.acDetails();
ac1.depositMoney(45000);
ac1.withdrawMoney(10000);

let ac2= new BankAccount("Riyas", "AR", 2500, 1469850000024694);
ac2.acDetails();
ac2.depositMoney(25000);
ac2.transferMoney(ac1, 2222);
console.log("ac2: ");
ac1.showBalance();