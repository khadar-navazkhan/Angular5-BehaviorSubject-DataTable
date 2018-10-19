import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsubmitComponent } from './formsubmit.component';

describe('FormsubmitComponent', () => {
  let component: FormsubmitComponent;
  let fixture: ComponentFixture<FormsubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
