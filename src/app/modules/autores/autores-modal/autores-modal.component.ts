import { Component, OnInit } from '@angular/core';
import { IAutor } from '../../../core/models/IAutores';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';

@Component({
  selector: 'app-autores-modal',
  standalone: true,
  imports: [FormsModule,InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './autores-modal.component.html',
  styleUrl: './autores-modal.component.scss'
})
export class AutoresModalComponent implements OnInit{
  
  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){

  }

  autores: IAutor = {
    IdAutor: 0,
    Nombres: '',
    ApellidoPaterno: '',
    ApellidoMaterno: '',
    Correo: '',
  };

  ngOnInit(): void {
    console.log('AutoresModalComponent',this.config.data);
    if(this.config.data.data){
     this.autores = this.config.data.data;
    }
   }
 
   isModoVer():boolean{
     return this.config.data.typeModal == TYPE_MODAL_VER
   }

}
