import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  correctAnswersCountSubject = new BehaviorSubject<number>(0);

  sendCountToResults(value: number) {
    this.correctAnswersCountSubject.next(value);
  }
  item1Result=0
  item1(item1Value:number){
    this.item1Result= item1Value;
    console.log("hii frm services"+ item1Value)
  }
  item2Result=0
  item2(item2Value:number){
    this.item2Result = item2Value
    console.log("hii frm services"+ item2Value)
  }
  item3Result=0
  item3(item3Value:number){
    this.item3Result = item3Value
    console.log("hii frm services"+ item3Value)
  }
  item4Result=0
  item4(item4Value:number){
    this.item4Result = item4Value
    console.log("hii frm services"+ item4Value)
  }
  item5Result=0
  item5(item5Value:number){
    this.item5Result = item5Value
    console.log("hii frm services"+ item5Value)
  }
  item6Result=0
  item6(item6Value:number){
    this.item6Result = item6Value
    console.log("hii frm services"+ item6Value)
  }
  item7Result=0
  item7(item7Value:number){
    this.item7Result = item7Value
    console.log("hii frm services"+ item7Value)
  }
  item8Result=0
  item8(item8Value:number){
    this.item8Result = item8Value
    console.log("hii frm services"+ item8Value)
  }
  item9Result=0
  item9(item9Value:number){
    this.item9Result = item9Value
    console.log("hii frm services"+ item9Value)
  }
  item10Result=0
  item10(item10Value:number){
    this.item10Result = item10Value
    console.log("hii frm services"+ item10Value)
  }
  item11Result=0
  item11(item11Value:number){
    this.item11Result = item11Value
    console.log("hii frm services"+ item11Value)
  }
  item12Result=0
  item12(item12Value:number){
    this.item12Result = item12Value
    console.log("hii frm services"+ item12Value)
  }
}
