import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
   
  submitForm() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router, private formBuilder : FormBuilder) {
    this.form = this.formBuilder.group({
      
    }); 
   }

  ngOnInit(): void{
  }

  onFormSubmit(data : any) {
    console.log(data);
    localStorage.setItem('email', data.email);
    this.router.navigateByUrl('/user');
  }

}
