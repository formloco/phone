import { BrowserModule } from '@angular/platform-browser'
import { NgModule, APP_INITIALIZER } from '@angular/core'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpConfig} from './interceptor/httpconfig.interceptor'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component'

import { MaterialModule } from "./material.module"

// security & anonomous route
import { PinComponent } from './admin/pin/pin.component'
import { AdminComponent } from './admin/admin.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { LayoutComponent } from './layout/layout.component'
import { DesktopComponent } from './desktop/desktop.component'
import { WelcomeComponent } from './welcome/welcome.component'
import { FormListsComponent } from './admin/form-lists/form-lists.component'

//indexedDB
import { IdbPersistenceService } from './service-idb/idb-persistence.service'

@NgModule({
  declarations: [
    AppComponent,
    PinComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    DesktopComponent,
    WelcomeComponent,
    FormListsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  exports:[
    PinComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    DesktopComponent,
    WelcomeComponent,
    FormListsComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfig,
      multi: true
    },
    { provide: APP_INITIALIZER,
      useFactory: (idbPersistenceService: IdbPersistenceService) => () => idbPersistenceService.connect(),
      deps: [IdbPersistenceService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
