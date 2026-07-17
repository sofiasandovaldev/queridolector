import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisterioComponent } from './misterio.component';

describe('MisterioComponent', () => {
  let component: MisterioComponent;
  let fixture: ComponentFixture<MisterioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisterioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
