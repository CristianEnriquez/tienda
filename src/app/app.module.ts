import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbCarouselConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';



//import { Rama1Component } from './componentes/rama1/rama1.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';
@NgModule({
  declarations: [
    AppComponent,
    //Rama1Component
  ],
  imports: [
    HttpClientModule,
    NgbModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule
   
  ],
  
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
