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
    width: '2.3rem',
    height: '2.3rem',
    'margin-left': '0.5rem'
  }

  libros: ILibro[] = [{
    idLibro: 1,
    titulo: 'Harry Potter',
    edicion: '1997',
    paginas: '640',
    idEditorial: '201501',
    idAutor: '5',
    idCategoria: '7',
    idIdioma: '3'
  },
  {
    idLibro: 2,
    titulo: 'Mi planta de naranja lima',
    edicion: '1976',
    paginas: '415',
    idEditorial: '201502',
    idAutor: '75',
    idCategoria: '5',
    idIdioma: '3'
  }
] 
  applyFilterGlobal($event:any, stringVal:string) {
    this.tblLibrosListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onClickAgregarLibro(){
    console.log('onClickAgregarLibro');
    this.dialogService.open(LibrosModalComponent,
      {
        header:'Crear un Libro', 
        width: '80vw',
        height: '80vh',
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
        header:'Crear un Libro', 
        width: '80vw',
        height: '80vh',
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
        header:'Crear un Libro', 
        width: '80vw',
        height: '80vh',
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
