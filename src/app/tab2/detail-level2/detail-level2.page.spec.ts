import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLevel2Page } from './detail-level2.page';

describe('DetailLevel2Page', () => {
  let component: DetailLevel2Page;
  let fixture: ComponentFixture<DetailLevel2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLevel2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLevel2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
