import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLevel3Page } from './detail-level3.page';

describe('DetailLevel3Page', () => {
  let component: DetailLevel3Page;
  let fixture: ComponentFixture<DetailLevel3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLevel3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLevel3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
