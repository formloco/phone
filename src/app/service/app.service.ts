import { Injectable } from '@angular/core'

import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '../../environments/environment'

import { IdbCrudService } from "../service-idb/idb-crud.service"

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public isPin = false
  public isSignin = false
  public isData = true
  public isDarkMode = true
  public canvasBackground

  public page
  public forms
  public formObj
  public apiLists
  public isListMenu
  public lookupLists

  apiUrl = environment.apiUrl

  constructor(
    private _http: HttpClient,
    private idbCrudService: IdbCrudService
  ) { }

}
