import { Component, OnInit } from '@angular/core';
import { Automovil } from '../model';
import { AUTOMOVILES } from '../data';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos:Automovil[];
  autoSeleccionado:Automovil;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.autos = AUTOMOVILES
  }
  
  open(content, auto: Automovil) {
    this.modalService.open(content,{ centered: true });
    this.autoSeleccionado=auto;
    
  }
}
