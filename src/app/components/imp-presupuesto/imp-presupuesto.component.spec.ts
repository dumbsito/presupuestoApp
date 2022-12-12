import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpPresupuestoComponent } from './imp-presupuesto.component';

describe('ImpPresupuestoComponent', () => {
  let component: ImpPresupuestoComponent;
  let fixture: ComponentFixture<ImpPresupuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImpPresupuestoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
