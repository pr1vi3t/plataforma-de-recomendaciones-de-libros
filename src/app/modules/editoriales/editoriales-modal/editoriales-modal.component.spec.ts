import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorialesModalComponent } from './editoriales-modal.component';

describe('EditorialesModalComponent', () => {
  let component: EditorialesModalComponent;
  let fixture: ComponentFixture<EditorialesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorialesModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditorialesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
