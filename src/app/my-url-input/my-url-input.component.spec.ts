import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUrlInputComponent } from './my-url-input.component';

describe('MyUrlInputComponent', () => {
  let component: MyUrlInputComponent;
  let fixture: ComponentFixture<MyUrlInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUrlInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUrlInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
