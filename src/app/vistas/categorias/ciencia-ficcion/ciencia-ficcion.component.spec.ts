import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciaFiccionComponent } from './ciencia-ficcion.component';

describe('CienciaFiccionComponent', () => {
  let component: CienciaFiccionComponent;
  let fixture: ComponentFixture<CienciaFiccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CienciaFiccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CienciaFiccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
