import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLevel1Page } from './detail-level1.page';

describe('DetailLevel1Page', () => {
  let component: DetailLevel1Page;
  let fixture: ComponentFixture<DetailLevel1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLevel1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLevel1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
