import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaybookPage } from './displaybook.page';

describe('DisplaybookPage', () => {
  let component: DisplaybookPage;
  let fixture: ComponentFixture<DisplaybookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaybookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaybookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
