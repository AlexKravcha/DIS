import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInDormComponent } from './life-in-dorm.component';

describe('LifeInDormComponent', () => {
  let component: LifeInDormComponent;
  let fixture: ComponentFixture<LifeInDormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInDormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInDormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
