import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourideasComponent } from './yourideas.component';

describe('YourideasComponent', () => {
  let component: YourideasComponent;
  let fixture: ComponentFixture<YourideasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourideasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourideasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
