import { Component, OnInit } from '@angular/core';
import { Automovil } from '../model';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AutosService } from '../service/autos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  autos: Automovil[];
  autoSeleccionado: Automovil;
  page : number;
  pageSize : number;

  constructor(private modalService: NgbModal, private autoService: AutosService) { }

  ngOnInit(): void {
    this.page = 1;
    this.pageSize = 10;
    this.autoService.getAutos().subscribe((response) => {
      this.autos = response.data
    })
  }

  open(content, auto: Automovil) {
    this.modalService.open(content, { centered: true });
    this.autoSeleccionado = auto;

  }
}


