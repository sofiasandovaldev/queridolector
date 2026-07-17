import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovelaJuvenilComponent } from './novela-juvenil.component';

describe('NovelaJuvenilComponent', () => {
  let component: NovelaJuvenilComponent;
  let fixture: ComponentFixture<NovelaJuvenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovelaJuvenilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovelaJuvenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
