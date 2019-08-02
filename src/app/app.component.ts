import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from "firebase";
import { Observable } from 'rxjs'
import {NgbCarouselConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig] 
})
export class AppComponent {
  title = 'florida';
  mostrarRama = true;
articuloElegido = false;
  items: Observable<any[]>;
  messages = [];
  images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

     
   imagen1;
   imagen2;
   imagen3;
   imagen4;
   nombre;
   tipo;
   aerolinea;
   precio;
  constructor(public db: AngularFireDatabase, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
 
    this.db.list('/aviones').valueChanges().subscribe((items) =>
    { 
     
     this.messages = [];
   
       
     for (let key in items) {
         this.messages.push(items[key]);
     }
   
     console.log("seraaaaaa ", this.messages)
   },(err)=>{ console.log("probleme : ", err) }), {
      query: {
        orderByChild: 'destacado',
        equalTo: 'true',
      }
    }

   }
   sera(){
    if (this.mostrarRama==false){
      this.mostrarRama=true;
          }else{
            this.mostrarRama=false
          }
  }
  refrescar(){
    window.location.reload(false); 
  }
 
  //botones Nav
  botonAvianca(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("aerolinea")
    .equalTo("avianca");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];
   
        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  botonIberia(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("aerolinea")
    .equalTo("iberia");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];
   
        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  botonTame(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("aerolinea")
    .equalTo("tame");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];
   
        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  botonAvionTerrestre(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("tipo")
    .equalTo("avionterrestre");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];
   
        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  botonHidroavion(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("tipo")
    .equalTo("hidroavion");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];

        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  botonAnfivion(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("tipo")
    .equalTo("anfivio");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];
   
        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  articuloSelect(imagen1,imagen2,imagen3,imagen4,nombre,tipo,aerolinea,precio){

this.imagen1=imagen1;
this.imagen2=imagen2;
this.imagen3=imagen3;
this.imagen4=imagen4;
this.nombre=nombre;
this.tipo=tipo;
this.aerolinea=aerolinea;
this.precio=precio;


  this.images[0] = imagen1;
  this.images[1] = imagen2;
  this.images[2] = imagen3;
  this.images[3] = imagen4;

    if(this.articuloElegido==false){
      this.articuloElegido=true;
    }else{
      this.articuloElegido=true
    }
    
  }


 
}

