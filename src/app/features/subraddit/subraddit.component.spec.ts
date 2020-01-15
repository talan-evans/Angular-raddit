import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubradditComponent } from './subraddit.component';

describe('SubradditComponent', () => {
  let component: SubradditComponent;
  let fixture: ComponentFixture<SubradditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubradditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubradditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
