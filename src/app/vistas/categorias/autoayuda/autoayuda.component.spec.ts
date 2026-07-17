import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoayudaComponent } from './autoayuda.component';

describe('AutoayudaComponent', () => {
  let component: AutoayudaComponent;
  let fixture: ComponentFixture<AutoayudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoayudaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoayudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
