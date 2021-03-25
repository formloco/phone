import { Component, OnInit, ViewChild } from '@angular/core'

import * as uuid from 'uuid'

import { MatSnackBar } from '@angular/material/snack-bar'
import { MatSidenav } from '@angular/material/sidenav'

import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms'

import { AppService } from "../service/app.service"

import { environment } from '../../environments/environment'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav

  token
  templates
  
  templateControls

  templateForm: FormGroup

  page
  fileArray = []
  isError = false
  isMainMenu = true
  isRightMenu = false
  isImportOpen = false
  isLookuplist = true

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    public appService: AppService) { 
      this.templateForm = this.formBuilder.group({
        templateArray: this.formBuilder.array([])
      })
    }
  
  ngOnInit() {
    
  }

  close(reason: string) {
    this.sidenav.close()
  }

  closeOverlay() {
    this.isImportOpen = false
  }

  goHome() {
    // this.appService.loginStatus = false
  }

  openList() {
    this.appService.isData = false
  }

}