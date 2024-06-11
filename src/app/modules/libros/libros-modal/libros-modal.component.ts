import { Component, OnInit } from '@angular/core';
import { ILibro } from '../../../core/models/ILibros';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-libros-modal',
  standalone: true,
  imports: [FormsModule,InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './libros-modal.component.html',
  styleUrl: './libros-modal.component.scss'
})
export class LibrosModalComponent implements OnInit{

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){

  }

  libros: ILibro = {
    idLibro: 0,
    titulo: '',
    edicion: '',
    paginas: '',
    idAutor: '',
    idCategoria: '',
    idIdioma: '',
    idEditorial: ''
  };

  ngOnInit(): void {
    console.log('LibrosModalComponent',this.config.data);
    if(this.config.data.data){
     this.libros = this.config.data.data;
    }
   }
 
   isModoVer():boolean{
     return this.config.data.typeModal == TYPE_MODAL_VER
   }

}
