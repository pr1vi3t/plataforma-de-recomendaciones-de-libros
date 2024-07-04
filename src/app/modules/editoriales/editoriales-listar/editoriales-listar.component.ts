import { Component, ViewChild } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { IEditorial } from '../../../core/models/IEditorial';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService } from 'primeng/dynamicdialog';
import { EditorialesModalComponent } from '../editoriales-modal/editoriales-modal.component';
import { FooterModalComponent } from '../../../shared/components/footer-modal/footer-modal.component';
import { TYPE_MODAL_AGREGAR, TYPE_MODAL_EDITAR, TYPE_MODAL_VER } from '../../../shared/utils/constants';
@Component({
  selector: 'app-editoriales-listar',
  standalone: true,
  imports: [TableModule,ButtonModule,IconFieldModule,InputIconModule,InputTextModule],
  templateUrl: './editoriales-listar.component.html',
  styleUrl: './editoriales-listar.component.scss',
  providers: [DialogService]
})
export class EditorialesListarComponent {

  constructor(
    private DialogService: DialogService
  ){
  }
  
  @ViewChild('tblEditorialesListar') tblEditorialesListar: Table | undefined;

  buttonStyle= {
    width: '3.3rem',
    height: '3.3rem',
    'margin-left': '0.5rem'
  }

  editoriales: IEditorial[] = [{
    idEditorial: 1,
    Nombre: 'Corimbo',
    PaisOrigen: 'España',
    CEO: 'Rafael Ros Sierra'
  },{
    idEditorial: 2,
    Nombre: 'Edelvives',
    PaisOrigen: 'Perú',
    CEO: 'Luis Vives'
  },{
    idEditorial: 3,
    Nombre: 'Norma',
    PaisOrigen: 'España',
    CEO: 'Rafael Martínez Díaz'
  },{
    idEditorial: 4,
    Nombre: 'Panini',
    PaisOrigen: 'Italia',
    CEO: 'Giuseppe Panini'
  },{
    idEditorial: 5,
    Nombre: 'Ivrea',
    PaisOrigen: 'Argentina',
    CEO: 'Leandro Oberto'
  }];

  applyFilterGlobal($event:any, stringVal:string) {
    this.tblEditorialesListar?.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
}

onClickAgregarEditorial(){
  console.log('onClickAgregarEditorial');
  this.DialogService.open(EditorialesModalComponent,
    {
      header:'Agregar una Editorial',
      width: '80vw',
      height: '50vh',
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

onClickVerEditorial(editorial: IEditorial){
  console.log('onClickVerEditorial',editorial);
  this.DialogService.open(EditorialesModalComponent,
    {
      header:'Información de Editorial',
      width: '80vw',
      height: '50vh',
      templates: {
        footer: FooterModalComponent
      },
      data: {
        typeModal: TYPE_MODAL_VER,
        data: editorial
      }
        
      }
    
  );
}

onClickEditarEditorial(editorial: IEditorial){
  console.log('onClickEditarEditorial',editorial);
  this.DialogService.open(EditorialesModalComponent,
    {
      header:'Modificar el Editorial',
      width: '80vw',
      height: '50vh',
      templates: {
        footer: FooterModalComponent
      },
      data: {
        typeModal: TYPE_MODAL_EDITAR,
        data: editorial
      }
    }
  )
}

}