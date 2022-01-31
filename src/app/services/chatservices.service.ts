import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatservicesService {

  constructor() { }

  reciveData:any=[]

  sendmsge1(reviveMsg:any){
    this.reciveData.push(reviveMsg)
    console.log("hii from services" +   this.reciveData)
    return this.reciveData;
  }
  
}
