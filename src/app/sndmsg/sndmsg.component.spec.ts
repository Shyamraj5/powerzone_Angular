import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SndmsgComponent } from './sndmsg.component';

describe('SndmsgComponent', () => {
  let component: SndmsgComponent;
  let fixture: ComponentFixture<SndmsgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SndmsgComponent]
    });
    fixture = TestBed.createComponent(SndmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
