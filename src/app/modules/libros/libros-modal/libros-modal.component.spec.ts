import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosModalComponent } from './libros-modal.component';

describe('LibrosModalComponent', () => {
  let component: LibrosModalComponent;
  let fixture: ComponentFixture<LibrosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrosModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LibrosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
