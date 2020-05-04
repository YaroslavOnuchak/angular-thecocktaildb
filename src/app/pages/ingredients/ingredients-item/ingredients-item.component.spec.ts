import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsItemComponent } from './ingredients-item.component';

describe('IngredientsItemComponent', () => {
  let component: IngredientsItemComponent;
  let fixture: ComponentFixture<IngredientsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
