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
  price12!:number;
  increment( ){
    this.item1Value++
    this.cartValue.item1(this.item1Value)
    this.price1 = this.item1Value * 1200;
  }
  decrement( ){
    if(this.item1Value>0){
      this.item1Value--
    this.cartValue.item1(this.item1Value)
    this.price1 = this.item1Value * 1200;
    }
  }
  
  increment1( ){  
    this.item2Value++
    this.cartValue.item2(this.item2Value)
    this.price2 = this.item2Value * 2200;
  }
  decrement1( ){
    if(this.item2Value>0){this.item2Value--
    this.cartValue.item2(this.item2Value)
    this.price2 = this.item2Value * 2200;
  }}
  
  increment2( ){
    this.item3Value++
    this.cartValue.item3(this.item3Value)
    this.price3 = this.item3Value * 1500;
  }
  decrement2( ){
    if(this.item3Value>0){this.item3Value--
    this.cartValue.item3(this.item3Value)
    this.price3 = this.item3Value * 1500;
  }}
  
  increment3( ){
    this.item4Value++
    this.cartValue.item4(this.item4Value)
    this.price4 = this.item4Value * 2600;
  }
  decrement3( ){
    if(this.item4Value>0){this.item4Value--
    this.cartValue.item4(this.item4Value)
    this.price4 = this.item4Value * 2600;
  }}
  
  increment4( ){
    this.item5Value++
    this.cartValue.item5(this.item5Value)
    this.price5 = this.item5Value * 200;
  }
  decrement4( ){
    if(this.item5Value>0){this.item5Value--
    this.cartValue.item5(this.item5Value)
    this.price5 = this.item5Value * 200;
  }}
  
  increment5( ){
    this.item6Value++
    this.cartValue.item6(this.item6Value)
    this.price6 = this.item6Value * 200;
  }
  decrement5( ){
    if(this.item6Value>0){this.item6Value--
    this.cartValue.item6(this.item6Value)
    this.price6 = this.item6Value * 200;
  }}
  
  increment6( ){
    this.item7Value++
    this.cartValue.item7(this.item7Value)
    this.price7 = this.item7Value * 500;
  }
  decrement6( ){
    if(this.item7Value>0){this.item7Value--
    this.cartValue.item7(this.item7Value)
    this.price7 = this.item7Value * 500;
  }}
  
  increment7( ){
    this.item8Value++
    this.cartValue.item8(this.item8Value)
    this.price8 = this.item8Value * 650;
  }
  decrement7( ){
    if(this.item8Value>0){this.item8Value--
    this.cartValue.item8(this.item8Value)
    this.price8 = this.item8Value * 650;
  }}
  
  increment8( ){
    this.item9Value++
    this.cartValue.item9(this.item9Value)
    this.price9 = this.item9Value * 500;
  }
  decrement8( ){
    if(this.item9Value>0){this.item9Value--
    this.cartValue.item9(this.item9Value)
    this.price9 = this.item9Value * 500;
  }}
  
  increment9( ){
    this.item10Value++
    this.cartValue.item10(this.item10Value)
    this.price10 = this.item10Value * 200;
  }
  decrement9( ){
    if(this.item10Value>0){this.item10Value--
    this.cartValue.item10(this.item10Value)
    this.price10 = this.item10Value * 200;
  }}
  
  increment10( ){
    this.item11Value++
    this.cartValue.item11(this.item11Value)
    this.price11 = this.item11Value * 750;
  }
  decrement10( ){
    if(this.item11Value>0){this.item11Value--
    this.cartValue.item11(this.item11Value)
    this.price11 = this.item11Value * 750;
  }}
  increment11( ){
    this.item12Value++
    this.cartValue.item12(this.item12Value)
    this.price12 = this.item12Value * 950;
  }
  decrement11( ){
    if(this.item12Value>0){this.item12Value--
    this.cartValue.item12(this.item12Value)
    this.price12 = this.item12Value * 950;
  }}
  sendCountToQuizService(newValue: any) {
    this.count = newValue;
    this.cartValue.sendCountToResults(this.count);
  }
  count!: number;
  ngOnInit() {
    this.count = this.cartValue.correctAnswersCountSubject.getValue();
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
