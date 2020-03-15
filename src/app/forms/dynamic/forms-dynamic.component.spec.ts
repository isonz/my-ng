import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDynamicComponent } from './forms-dynamic.component';

describe('FormsDynamicComponent', () => {
  let component: FormsDynamicComponent;
  let fixture: ComponentFixture<FormsDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
