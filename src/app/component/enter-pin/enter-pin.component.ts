import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-enter-pin',
  templateUrl: './enter-pin.component.html',
  styleUrls: ['./enter-pin.component.css']
})
export class EnterPinComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public setPinForm = new FormGroup({
    setPin: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(6),
         Validators.minLength(6)]
         ),
  })

  get setPin() {
    return this.setPinForm.get('setPin');
  }

  public setPinFormSubmit(){
    Swal.fire({
      title: "Withdraw Successfull",
      confirmButtonText: "Okay",
    }).then((result) => {

      this.router.navigate(['/']);

    });
  }

}
