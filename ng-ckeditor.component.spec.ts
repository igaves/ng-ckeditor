import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCkeditorComponent } from './ng-ckeditor.component';

describe('NgCkeditorComponent', () => {
  let component: NgCkeditorComponent;
  let fixture: ComponentFixture<NgCkeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCkeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCkeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
