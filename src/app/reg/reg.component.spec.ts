import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegComponent } from './reg.component';

describe('RegComponent', () => {
  let component: RegComponent;
  let fixture: ComponentFixture<RegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegComponent]
    });
    fixture = TestBed.createComponent(RegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
