import { Component, OnInit } from '@angular/core';
import { SignupService } from 'src/app/services/signup.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private signupService: SignupService) { }

  ngOnInit(): void {
    console.log("User is being registered now");
  }

  onFormSubmit(data : any): Observable<any> {
    console.log(data);
    const response = this.signupService.create(data);
    console.log(response);
    return response;
  }

}
