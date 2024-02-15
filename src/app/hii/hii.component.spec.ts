import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiiComponent } from './hii.component';

describe('HiiComponent', () => {
  let component: HiiComponent;
  let fixture: ComponentFixture<HiiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiiComponent]
    });
    fixture = TestBed.createComponent(HiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
