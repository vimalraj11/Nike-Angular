import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  number:any="";
  amount:any="";
  totalAmount:any="";
  availableAmount:any=""

  pay(){
    if(this.number == localStorage.getItem("myNumber")){
      this.totalAmount = localStorage.getItem("myaBalance")
      this.availableAmount = this.totalAmount-this.amount
      localStorage.setItem("myaBalance",this.availableAmount);
      this.route.navigate(['/layout/cart']);
      alert("payment is Succesfull")
    }

  }

}
