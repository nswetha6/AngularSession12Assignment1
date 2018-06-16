import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListCompComponent } from './student-list-comp.component';

describe('StudentListCompComponent', () => {
  let component: StudentListCompComponent;
  let fixture: ComponentFixture<StudentListCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
