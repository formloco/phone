import { Component, OnInit } from '@angular/core'

import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"

import { AppService } from "../../service/app.service"
import { ErrorService } from "../../service/error.service"

import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  auth
  token

  pin = environment.pin
  pinForm: FormGroup

  constructor(
    private fb: FormBuilder,
    public appService: AppService,
    private errorService: ErrorService) { 
    this.pinForm = this.fb.group({
      pin: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  loginPIN() {
    if (this.pin == this.pinForm.controls['pin'].value) {
      // this.authService.loginStatus = true
      this.appService.isSignin = true
      this.appService.isPin = false
    }
    else
      this.errorService.popSnackbar('Incorrect PIN')
  }

  goHome() {
    this.appService.isPin = false
  }

}
