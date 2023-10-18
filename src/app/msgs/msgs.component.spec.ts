import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsComponent } from './msgs.component';

describe('MsgsComponent', () => {
  let component: MsgsComponent;
  let fixture: ComponentFixture<MsgsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MsgsComponent]
    });
    fixture = TestBed.createComponent(MsgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
