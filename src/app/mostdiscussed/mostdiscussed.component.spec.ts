import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostdiscussedComponent } from './mostdiscussed.component';

describe('MostdiscussedComponent', () => {
  let component: MostdiscussedComponent;
  let fixture: ComponentFixture<MostdiscussedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostdiscussedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostdiscussedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
