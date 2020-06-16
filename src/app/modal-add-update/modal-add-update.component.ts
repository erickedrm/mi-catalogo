import { Component, OnInit } from '@angular/core';
import { Automovil } from '../model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-update',
  templateUrl: './modal-add-update.component.html',
  styleUrls: ['./modal-add-update.component.css']
})
export class ModalAddUpdateComponent implements OnInit {


  accion:String;

  auto:Automovil

  constructor(public activeModal:NgbActiveModal) { }



  ngOnInit(): void {
  }

}
