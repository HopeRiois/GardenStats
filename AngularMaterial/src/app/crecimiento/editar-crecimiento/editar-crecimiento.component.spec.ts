import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCrecimientoComponent } from './editar-crecimiento.component';

describe('EditarCrecimientoComponent', () => {
  let component: EditarCrecimientoComponent;
  let fixture: ComponentFixture<EditarCrecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCrecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
