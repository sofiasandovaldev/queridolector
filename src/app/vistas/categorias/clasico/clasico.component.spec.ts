import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasicoComponent } from './clasico.component';

describe('ClasicoComponent', () => {
  let component: ClasicoComponent;
  let fixture: ComponentFixture<ClasicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClasicoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClasicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
