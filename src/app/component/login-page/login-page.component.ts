import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor( public dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  public mobileVerification = new FormGroup({
    phoneNumber: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(10),
         Validators.minLength(10)]
         ),
  })

  get phoneNumber() {
    return this.mobileVerification.get('phoneNumber');
  }

  public mobileVerificationFormSubmit(){
    this.dialogRef.open(PopUpComponent, {
      width: '40%',
      autoFocus: false,
      restoreFocus: false,
    })
  }


}
