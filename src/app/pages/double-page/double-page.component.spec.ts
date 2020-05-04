import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublePageComponent } from './double-page.component';

describe('DoublePageComponent', () => {
  let component: DoublePageComponent;
  let fixture: ComponentFixture<DoublePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
