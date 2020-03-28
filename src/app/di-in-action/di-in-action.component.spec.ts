import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiInActionComponent } from './di-in-action.component';

describe('DiInActionComponent', () => {
  let component: DiInActionComponent;
  let fixture: ComponentFixture<DiInActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiInActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
