import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockEComponent } from './stock-e.component';

describe('StockEComponent', () => {
  let component: StockEComponent;
  let fixture: ComponentFixture<StockEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockEComponent]
    });
    fixture = TestBed.createComponent(StockEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
