import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TYPE_MODAL_VER } from '../../../shared/utils/constants';
import { CommonModule } from '@angular/common';
import { ValidatorFormComponent } from '../../../shared/components/validator-form/validator-form.component';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';

@Component({
  selector: 'app-libros-modal',
  standalone: true,
  imports: [
    FormsModule, 
    CommonModule, 
    ReactiveFormsModule, 
    ValidatorFormComponent, 

    ButtonModule,
    InputTextModule,
    FloatLabelModule,
    FieldsetModule],
  templateUrl: './libros-modal.component.html',
  styleUrl: './libros-modal.component.scss'
})
export class LibrosModalComponent implements OnInit{

  libroForm: FormGroup;

  constructor(
    private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private fb: FormBuilder
  ){
    this.libroForm = this.fb.group({
      Titulo: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required]
      ],
      Edicion: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required, Validators.maxLength(4), Validators.minLength(4), Validators.pattern('^[0-9]*$')]
      ],
      Paginas: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required, Validators.maxLength(4), Validators.pattern('^[0-9]*$')]
      ],
      IdAutor: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required]
      ],
      IdCategoria: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required]
      ],
      IdIdioma: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required]
      ],
      IdEditorial: [
        {value: '', disabled: this.isModoVer()},
        [Validators.required]
      ]
    })
  }

  /*libros: ILibro = {
    IdLibro: 0,
    Titulo: '',
    Edicion: '',
    Paginas: '',
    IdAutor: '',
    IdCategoria: '',
    IdIdioma: '',
    IdEditorial: ''
  };*/

  ngOnInit(): void {
    console.log('LibrosModalComponent',this.config.data);
    if(this.config.data.data){
     //this.libros = this.config.data.data;
     this.libroForm.patchValue(this.config.data.data);
    }
   }
 
   isModoVer():boolean{
     return this.config.data.typeModal == TYPE_MODAL_VER
   }

   onSubmit(){
    console.log('onSubmit');
    
    this.libroForm.markAllAsTouched();

    if(!this.libroForm.valid){
      console.error('El formulario tiene errores');
      return; 
    } 


    console.log('El formulario esta ok');
  }

}
