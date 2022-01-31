import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  count!: number;
  constructor(private myCounter:CounterService) { }

  ngOnInit() {
    this.count = this.myCounter.correctAnswersCountSubject.getValue();
    this.sendCountToQuizService(this.count);
    this.counter = this.myCounter.item1Result;
    this.counter1 = this.myCounter.item2Result;
    this.counter2 = this.myCounter.item3Result;
    this.counter3 = this.myCounter.item4Result;
    this.counter4 = this.myCounter.item5Result;
    this.counter5 = this.myCounter.item6Result;
    this.counter6 = this.myCounter.item7Result;
    this.counter7 = this.myCounter.item8Result;
    this.counter8 = this.myCounter.item9Result;
    this.counter9 = this.myCounter.item10Result;
    this.counter10 = this.myCounter.item11Result;
    this.counter11 = this.myCounter.item12Result;
  }

  sendCountToQuizService(newValue: any) {
    this.count = newValue;
    this.myCounter.sendCountToResults(this.count);
  }
  counter=0
  increment( ){
    this.counter++
    this.myCounter.item1(this.counter)
  }
  decrement( ){
    this.counter--
    this.myCounter.item1(this.counter)
  }
  counter1=0
  increment1(){
    this.counter1++
    this.myCounter.item2(this.counter1)
  }
  decrement1(){
    this.counter1--
    this.myCounter.item2(this.counter1)
  }
  counter2=0
  increment2(){
    this.counter2++
    this.myCounter.item3(this.counter2)
  }
  decrement2(){
    this.counter2--
    this.myCounter.item3(this.counter2)
  }
  counter3=0
  increment3(){
    this.counter3++
    this.myCounter.item4(this.counter3)
  }
  decrement3(){
    this.counter3--
    this.myCounter.item4(this.counter3)
  }
  counter4=0
  increment4(){
    this.counter4++
    this.myCounter.item5(this.counter4)
  }
  decrement4(){
    this.counter4--
    this.myCounter.item5(this.counter4)
  }
  counter5=0
  increment5(){
    this.counter5++
    this.myCounter.item6(this.counter5)
  }
  decrement5(){
    this.counter5--
    this.myCounter.item6(this.counter5)
  }
  counter6=0
  increment6(){
    this.counter6++
    this.myCounter.item7(this.counter6)
  }
  decrement6(){
    this.counter6--
    this.myCounter.item7(this.counter6)
  }
  counter7=0
  increment7(){
    this.counter7++
    this.myCounter.item8(this.counter7)
  }
  decrement7(){
    this.counter7--
    this.myCounter.item8(this.counter7)
  }
  counter8=0
  increment8(){
    this.counter8++
    this.myCounter.item9(this.counter8)
  }
  decrement8(){
    this.counter8--
    this.myCounter.item9(this.counter8)
  }
  counter9=0
  increment9(){
    this.counter9++
    this.myCounter.item10(this.counter9)
  }
  decrement9(){
    this.counter9--
    this.myCounter.item10(this.counter9)
  }
  counter10=0
  increment10(){
    this.counter10++
    this.myCounter.item11(this.counter10)
  }
  decrement10(){
    this.counter10--
    this.myCounter.item11(this.counter10)
  }
  counter11=0
  increment11(){
    this.counter11++
    this.myCounter.item12(this.counter11)
  }
  decrement11(){
    this.counter11--
    this.myCounter.item12(this.counter11)
  }
}
