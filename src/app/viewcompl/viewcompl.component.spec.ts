import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcomplComponent } from './viewcompl.component';

describe('ViewcomplComponent', () => {
  let component: ViewcomplComponent;
  let fixture: ComponentFixture<ViewcomplComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewcomplComponent]
    });
    fixture = TestBed.createComponent(ViewcomplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
