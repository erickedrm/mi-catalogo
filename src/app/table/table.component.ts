import { Component, OnInit } from '@angular/core';
import { Automovil } from '../model';
import { AutosService } from '../service/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  autos:Automovil[];
  page : number;
  pageSize : number;

  constructor( private autoService : AutosService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data
    })
    
  }

  openModalEditar(auto :Automovil){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Editar";

  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    //modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Agregar";

  }
}
