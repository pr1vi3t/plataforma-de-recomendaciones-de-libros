import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosListarComponent } from './libros-listar.component';

describe('LibrosListarComponent', () => {
  let component: LibrosListarComponent;
  let fixture: ComponentFixture<LibrosListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrosListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
