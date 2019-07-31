import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from "firebase";
import { Observable } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florida';
  mostrarRama = true;

  items: Observable<any[]>;
  messages = [];
  constructor(public db: AngularFireDatabase) {
 
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
          this.messages.push(data[key]);
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
          this.messages.push(data[key]);
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
          this.messages.push(data[key]);
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
          this.messages.push(data[key]);
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
          this.messages.push(data[key]);
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
          this.messages.push(data[key]);
      }
    
  });
  }
  
 
}

