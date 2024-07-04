import { Component, ViewChild } from '@angular/core';
import { IAutor } from '../../../core/models/IAutores';
import { Table, TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogService } from 'primeng/dynamicdialog';
import { AutoresModalComponent } from '../autores-modal/autores-modal.component';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import { TYPE_MODAL_AGREGAR, TYPE_MODAL_EDITAR, TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-autores-listar',
  standalone: true,
  imports: [TableModule, InputTextModule, ButtonModule, IconFieldModule, InputIconModule],
  templateUrl: './autores-listar.component.html',
  styleUrl: './autores-listar.component.scss',
  providers: [DialogService]
})
export class AutoresListarComponent {

  constructor(private dialogService: DialogService){}

  @ViewChild('tblAutoresListar') tblAutoresListar: Table | undefined;

  buttonStyle= {
    width: '3.3rem',
    height: '3.3rem',
    'margin-left': '0.5rem'
  }

  autores: IAutor[] = [{
    IdAutor: 1,
    Nombres: 'Joanne Rowling',
    ApellidoPaterno: 'Robert ',
    ApellidoMaterno: 'Galbraith',
    Correo: 'Joanne@gmail.com'
  },
  {
    IdAutor: 2,
    Nombres: 'Harry James',
    ApellidoPaterno: 'Potter',
    ApellidoMaterno: 'Tercero',
    Correo: 'harry@gmail,com'
  }
] 
  applyFilterGlobal($event:any, stringVal:string) {
    this.tblAutoresListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }

  onClickAgregarAutor(){
    console.log('onClickAgregarAutor');
    this.dialogService.open(AutoresModalComponent,
      {
        header:'Agregar un Autor', 
        width: '80vw',
        height: '48vh',
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

  onClickVerAutor(autor: IAutor){
    console.log('onClickVerAutor', autor);
    this.dialogService.open(AutoresModalComponent,
      {
        header:'Datos del Autor', 
        width: '80vw',
        height: '48vh',
        templates: {
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_VER,
          data: autor
        }
      }
    );
  }

  onClickEditarAutor(autor: IAutor){
    console.log('onClickEditarAutor', autor);
    this.dialogService.open(AutoresModalComponent,
      {
        header:'Editar Datos del Autor', 
        width: '80vw',
        height: '48vh',
        templates: {
          footer: FooterModalComponent
        },
        data: {
          typeModal: TYPE_MODAL_EDITAR,
          data: autor
        }
      }
    );
  }

}