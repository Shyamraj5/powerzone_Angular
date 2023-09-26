import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminvserviceComponent } from './adminvservice.component';

describe('AdminvserviceComponent', () => {
  let component: AdminvserviceComponent;
  let fixture: ComponentFixture<AdminvserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminvserviceComponent]
    });
    fixture = TestBed.createComponent(AdminvserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
