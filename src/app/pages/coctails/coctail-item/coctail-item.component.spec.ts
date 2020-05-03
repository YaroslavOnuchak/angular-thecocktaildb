import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoctailItemComponent } from './coctail-item.component';

describe('CoctailItemComponent', () => {
  let component: CoctailItemComponent;
  let fixture: ComponentFixture<CoctailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoctailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoctailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
