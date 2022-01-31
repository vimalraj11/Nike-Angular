import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  fieldTextType!: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  
  model: any = {};
  
  onSubmit() {
    localStorage.setItem("form-details",JSON.stringify(this.model.value))
    console.log(JSON.stringify(this.model))
  }

  toggleFieldTextType() : void {
    this.fieldTextType = !this.fieldTextType;
  };

}
