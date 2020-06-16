import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ANALYZE_FOR_ENTRY_COMPONENTS } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { VistasComponent } from './vistas/vistas.component';
import { ListComponent } from './list/list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableComponent } from './table/table.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ModalAddUpdateComponent } from './modal-add-update/modal-add-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VistasComponent,
    ListComponent,
    TableComponent,
    PagenotfoundComponent,
    ModalAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalAddUpdateComponent]
})
export class AppModule { }
