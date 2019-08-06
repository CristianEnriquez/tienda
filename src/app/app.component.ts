
import {Component, NgModule, VERSION, Input, OnInit} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { FormGroup } from "@angular/forms";
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from "firebase";
import { Observable, empty, } from 'rxjs';

import {BrowserModule} from '@angular/platform-browser'
import {DomSanitizer} from '@angular/platform-browser';

import {NgbCarouselConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig ] 
 
})
export class AppComponent {


//imagenes

  filePreview1: string
 
  filePreview2: string
  
  filePreview3: string

  filePreview4: string



  nombreAvion: String;


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
   destacado;
   
  
   fileData: File = null;
   previewUrl:any = null;
   fileUploadProgress: string = null;
   uploadedFilePath: string = null;

  constructor(private http: HttpClient,public db: AngularFireDatabase, config: NgbCarouselConfig,private sanitizer: DomSanitizer) {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
 
  
this.consultaInicio();
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
    .equalTo("Avianca");

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
    .equalTo("Iberia");

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
    .equalTo("Tame");

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
    .equalTo("Avión terrestre");

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
    .equalTo("Hidroavión");

    messagesRef.on("value", snap => {
      let data = snap.val();
      this.messages = [];

        
      for (let key in data) {
          this.messages.push(data[key])
      }
    
  });
  }
  botonAnfibio(){
    let messagesRef = firebase
    .database()
    .ref("/aviones")
    .orderByChild("tipo")
    .equalTo("Anfibio");

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
      this.articuloElegido=false
    }
    
  }


    
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}
 



onFileChanged1(event) {
  console.log(event.target.files.length)
  let reader =null
   reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    let file=[];
     file = event.target.files[0];
     
    reader.readAsDataURL(file);
    reader.onload = () => {
      
    
      this.filePreview1 = reader.result.split();
      this.filePreview1 =  this.filePreview1[0];
      console.log(this.filePreview1.length+'seraaaaaa    '+this.filePreview1)
    };
    

    
  
  }
  event=[]
}

onFileChanged2(event) {
  console.log(event.target.files.length)
  
  let reader =null
   reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    let file=[];
     file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      
    
      this.filePreview2 = reader.result.split();
      this.filePreview2 =  this.filePreview2[0];
   console.log(this.filePreview2.length+'seraaaaaa    '+this.filePreview2)
    };
  }
}
onFileChanged3(event) {
  console.log(event.target.files.length)
  let reader =null
   reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    let file=[];
     file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
     
    
      this.filePreview3 = reader.result.split();
      this.filePreview3 =  this.filePreview3[0];
      console.log(this.filePreview3.length+' seraaaaaa    '+this.filePreview3)
    };
  }
  event=[]

}
onFileChanged4(event) {
  console.log(event.target.files.length)
  let reader =null
   reader = new FileReader();
  if (event.target.files && event.target.files.length > 0) {
    let file=[];
     file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
       
    
      this.filePreview4 = reader.result.split();
      this.filePreview4 =  this.filePreview4[0];
      console.log(this.filePreview4.length+'seraaaaaa    '+this.filePreview4)
    };
  }
  event=[]
}


sendMessage() {

  
        let messageRef = firebase
            .database()
            .ref()
            .child("aviones");
     
        messageRef.push({
         //   nombre: "" + this.userName,
        imagen1:""+this.filePreview1,
        imagen2:""+this.filePreview2,
        imagen3:""+this.filePreview3,
        imagen4:""+this.filePreview4,
        nombre:""+this.nombreAvion,
        tipo:"Hidroavión",
        aerolinea:"Tame",
        precio:"25$",
        destacado:""
        });

    console.log("Mensaje enviado");
    

  
}

consultaInicio(){
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
      equalTo: "",
    }
  }
}

buscarNombre(){
  let nom = this.nombreAvion.toString
  let messagesRef = firebase
  .database()
  .ref("/aviones")
  .orderByChild("nombre")
  .equalTo(this.nombreAvion+'');

  messagesRef.on("value", snap => {
    let data = snap.val();
    this.messages = [];

      
    for (let key in data) {
        this.messages.push(data[key])
    }
  
});
}

fin(){
 
  this.sendMessage()
}

}