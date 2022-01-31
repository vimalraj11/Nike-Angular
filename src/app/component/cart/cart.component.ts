import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartValue: CounterService) { }

  item1Value!: number;
  item2Value!: number;
  item3Value!: number;
  item4Value!: number;
  item5Value!: number;
  item6Value!: number;
  item7Value!: number;
  item8Value!: number;
  item9Value!: number;
  item10Value!: number;
  item11Value!: number;
  item12Value!: number;

  price1!:number
  price2!:number
  price3!:number
  price4!:number
  price5!:number
  price6!:number
  price7!:number
  price8!:number
  price9!:number
  price10!:number
  price11!:number
  price12!:number
  ngOnInit() {
    this.item1Value =this.cartValue.item1Result;
    this.item2Value = this.cartValue.item2Result;
    this.item3Value = this.cartValue.item3Result;
    this.item4Value = this.cartValue.item4Result;
    this.item5Value = this.cartValue.item5Result;
    this.item6Value = this.cartValue.item6Result;
    this.item7Value = this.cartValue.item7Result;
    this.item8Value = this.cartValue.item8Result;
    this.item9Value = this.cartValue.item9Result;
    this.item10Value = this.cartValue.item10Result;
    this.item11Value = this.cartValue.item11Result;
    this.item12Value = this.cartValue.item12Result;
    this.price1 = this.item1Value * 1200;
    this.price2 = this.item2Value * 2200;
    this.price3 = this.item3Value * 1500;
    this.price4= this.item4Value * 2600;
    this.price5 = this.item5Value *200;
    this.price6 = this.item6Value * 200;
    this.price7 = this.item7Value * 500;
    this.price8= this.item8Value * 650;
    this.price9 = this.item9Value * 500;
    this.price10 = this.item10Value * 200;
    this.price11= this.item11Value * 750;
    this.price12 =this.item12Value * 950; 
  }

}
