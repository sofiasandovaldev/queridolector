import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThillerComponent } from './thiller.component';

describe('ThillerComponent', () => {
  let component: ThillerComponent;
  let fixture: ComponentFixture<ThillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThillerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
