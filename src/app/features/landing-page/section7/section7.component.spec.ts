import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7Component } from './section7.component';

describe('Section7Component', () => {
  let component: Section7Component;
  let fixture: ComponentFixture<Section7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Section7Component]
    });
    fixture = TestBed.createComponent(Section7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
