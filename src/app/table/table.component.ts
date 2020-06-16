import { Component, OnInit } from '@angular/core';
import { Automovil } from '../model';
import { AutosService } from '../service/autos.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddUpdateComponent } from '../modal-add-update/modal-add-update.component';
import { ModalConfirmActionComponent } from '../modal-confirm-action/modal-confirm-action.component';


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

    modalRef.result.then(
      (auto) => {
        this.autoService.updateAutos(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason)
      }
    )

  }

  openModalAgregar(){
    const modalRef = this.modalService.open(ModalAddUpdateComponent,{centered:true});
    //modalRef.componentInstance.auto = auto;
    modalRef.componentInstance.accion = "Agregar";
    modalRef.result.then(
      (auto) => {
        this.autoService.newAutos(auto).subscribe(response => console.log(response));
      },
      (reason) => {
        console.log(reason)
      }
    )

  }

  openModalConfirmarEliminar(auto :Automovil){
    const modalRef = this.modalService.open(ModalConfirmActionComponent,{centered:true});
    modalRef.componentInstance.auto = auto;
    //este metodo es el result de la promise
    modalRef.result.then(
      (autoTemp) => {
        this.autoService.deleteAutos(auto).subscribe(response => {
          console.log("Respuesta cuando se termina de elimar un auto")
          console.log(response)
        })
      },
      (reason) => {
        console.log(reason)
      }
    )

  }
}
