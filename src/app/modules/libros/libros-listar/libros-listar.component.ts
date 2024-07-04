import { Component, ViewChild } from '@angular/core';
import { ILibro } from '../../../core/models/ILibros';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogService } from 'primeng/dynamicdialog';
import { LibrosModalComponent } from '../libros-modal/libros-modal.component';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import { TYPE_MODAL_AGREGAR, TYPE_MODAL_EDITAR, TYPE_MODAL_VER } from '../../../shared/utils/constants';


@Component({
  selector: 'app-libros-listar',
  standalone: true,
  imports: [TableModule, InputTextModule, ButtonModule, IconFieldModule, InputIconModule],
  templateUrl: './libros-listar.component.html',
  styleUrl: './libros-listar.component.scss',
  providers: [DialogService]
})
export class LibrosListarComponent {

  constructor(private dialogService: DialogService){}

  @ViewChild('tblLibrosListar') tblLibrosListar: Table | undefined;

  buttonStyle= {
    width: '3.3rem',
    height: '3.3rem',
    'margin-left': '0.5rem'
  }

  libros: ILibro[] = [{
    IdLibro: 1,
    Titulo: 'Harry Potter',
    Edicion: '1997',
    Paginas: '640',
    IdEditorial: 'Norma',
    IdAutor: 'Joanne Rowling',
    IdCategoria: 'Fantasia',
    IdIdioma: 'Español'
  },
  {
    IdLibro: 2,
    Titulo: 'Mi planta de naranja lima',
    Edicion: '1976',
    Paginas: '415',
    IdEditorial: 'Norma',
    IdAutor: 'Jose Mauro de Vasconcelos',
    IdCategoria: 'Drama',
    IdIdioma: 'Portuguez'
  }
] 
  applyFilterGlobal($event:any, stringVal:string) {
    this.tblLibrosListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onClickAgregarLibro(){
    console.log('onClickAgregarLibro');
    this.dialogService.open(LibrosModalComponent,
      {
        header:'Agregar un Libro', 
        width: '80vw',
        height: '65vh',
        templates: {
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_AGREGAR,
          data: undefined
        }
      }
    );
  }

  onClickVerLibro(libro: ILibro){
    console.log('onClickVerLibro', libro);
    this.dialogService.open(LibrosModalComponent,
      {
        header:'Ver un Libro', 
        width: '80vw',
        height: '65vh',
        templates: {
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_VER,
          data: libro
        }
      }
    );
  }

  onClickEditarLibro(libro: ILibro){
    console.log('onClickEditarLibro', libro);
    this.dialogService.open(LibrosModalComponent,
      {
        header:'Editar un Libro', 
        width: '80vw',
        height: '65vh',
        templates: {
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_EDITAR,
          data: libro
        }
      }
    );
  }
}
