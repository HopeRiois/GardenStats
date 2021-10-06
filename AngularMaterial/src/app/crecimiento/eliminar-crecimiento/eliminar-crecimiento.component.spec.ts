import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCrecimientoComponent } from './eliminar-crecimiento.component';

describe('EliminarCrecimientoComponent', () => {
  let component: EliminarCrecimientoComponent;
  let fixture: ComponentFixture<EliminarCrecimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarCrecimientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarCrecimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
