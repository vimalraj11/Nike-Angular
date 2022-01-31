import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name:any="";
  upiid:any="";
  number:any="";
  accNumber:any="";

  savedata(){
    localStorage.setItem("Name",this.name);
    localStorage.setItem("myUpiid",this.upiid)
    localStorage.setItem('myNumber',this.number)
    localStorage.setItem("myaccNumber",this.accNumber);
  }

}
