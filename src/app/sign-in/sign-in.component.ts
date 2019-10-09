import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { logInService } from '../Login/logInService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInFrom: FormGroup;
  constructor(private signInService: logInService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.signInFrom = new FormGroup({
      name : new FormControl(''),
      email: new FormControl(''),
      organization: new FormControl(''),
      tel: new FormControl(''),
      comment: new FormControl('')
    });
  }
  submit() {
    console.log(this.signInFrom.value);
    this.signInService.login(this.signInFrom.value).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}
