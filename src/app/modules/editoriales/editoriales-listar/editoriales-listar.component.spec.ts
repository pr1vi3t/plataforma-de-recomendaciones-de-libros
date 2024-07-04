import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesListarComponent } from './editoriales-listar.component';

describe('EditorialesListarComponent', () => {
  let component: EditorialesListarComponent;
  let fixture: ComponentFixture<EditorialesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialesListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorialesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
