import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProvidesComponent } from './user-provides.component';

describe('UserProvidesComponent', () => {
  let component: UserProvidesComponent;
  let fixture: ComponentFixture<UserProvidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProvidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProvidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
