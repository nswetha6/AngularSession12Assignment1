import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpdummyComponent } from './httpdummy.component';

describe('HttpdummyComponent', () => {
  let component: HttpdummyComponent;
  let fixture: ComponentFixture<HttpdummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpdummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpdummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
