import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductAdminComponent } from './card-product-admin.component';

describe('CardProductAdminComponent', () => {
  let component: CardProductAdminComponent;
  let fixture: ComponentFixture<CardProductAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProductAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
