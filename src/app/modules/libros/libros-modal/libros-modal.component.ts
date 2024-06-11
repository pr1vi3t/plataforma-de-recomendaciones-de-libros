import { Component, OnInit } from '@angular/core';
import { ILibro } from '../../../core/models/ILibros';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-libros-modal',
  standalone: true,
  imports: [FormsModule,InputTextModule, FloatLabelModule, ButtonModule],
  templateUrl: './libros-modal.component.html',
  styleUrl: './libros-modal.component.scss'
})
export class LibrosModalComponent implements OnInit{

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
   
  }

}
