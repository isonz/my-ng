import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgModulesComponent } from './ng-modules.component';

describe('NgModulesComponent', () => {
  let component: NgModulesComponent;
  let fixture: ComponentFixture<NgModulesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        NgModulesComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(NgModulesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(NgModulesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(NgModulesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
