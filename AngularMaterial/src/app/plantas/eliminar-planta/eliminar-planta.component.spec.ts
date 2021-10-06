import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarPlantaComponent } from './eliminar-planta.component';

describe('EliminarPlantaComponent', () => {
  let component: EliminarPlantaComponent;
  let fixture: ComponentFixture<EliminarPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
