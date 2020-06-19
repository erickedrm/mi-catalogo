import { Component, OnInit } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Automovil } from '../model';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {

  aceptar:boolean = true;
  accion:String;
  aniomaximo:number;
  aniominimo:number;
  auto: Automovil = {} as Automovil;
  modeloss:number[] = [];
  constructor(public activeModal:NgbActiveModal) { }



  ngOnInit(): void {
   if(this.accion == 'Editar'){
     this.aniominimo = this.auto.modelos[0];
     this.aniomaximo = this.auto.modelos[this.auto.modelos.length-1]
   }else{
     this.aniominimo = 2000;
     this.aniomaximo = 2020;
   }

  }
  
  onSubmit() {
    console.log('onSubmit()')
  
    for (let index = this.aniominimo; index <= this.aniomaximo ; index++) {
      //const element = array[index];
      this.modeloss?.push(index);
      
      
    }
    
    
    this.auto.modelos = this.modeloss;

    this.activeModal.close(this.auto);

  }

  anios(){
    if(this.aniomaximo < this.aniominimo){
      this.aniomaximo = this.aniominimo;
    }
  }

  

}
