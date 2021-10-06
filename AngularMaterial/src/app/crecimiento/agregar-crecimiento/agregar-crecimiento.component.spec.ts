import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCrecimientoComponent } from './agregar-crecimiento.component';

describe('AgregarCrecimientoComponent', () => {
  let component: AgregarCrecimientoComponent;
  let fixture: ComponentFixture<AgregarCrecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCrecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
