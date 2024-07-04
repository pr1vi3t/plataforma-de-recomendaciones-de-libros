import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IEditorial } from '../../../core/models/IEditorial';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';



@Component({
  selector: 'app-editoriales-modal',
  standalone: true,
  imports: [FormsModule,InputTextModule,FloatLabelModule,ButtonModule],
  templateUrl: './editoriales-modal.component.html',
  styleUrl: './editoriales-modal.component.scss'
})
export class EditorialesModalComponent implements OnInit {

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ){

  }
editoriales: IEditorial = {
  idEditorial: 0,
  Nombre:'',
  PaisOrigen:'',
  CEO:'',

};



ngOnInit(): void {
  console.log('EditorialesModalComponent',this.config.data);
  if(this.config.data.data){
   this.editoriales = this.config.data.data;
  }
 }

 isModoVer():boolean{
   return this.config.data.typeModal == TYPE_MODAL_VER
 }

}