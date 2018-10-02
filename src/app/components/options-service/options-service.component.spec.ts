import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsServiceComponent } from './options-service.component';

describe('OptionsServiceComponent', () => {
  let component: OptionsServiceComponent;
  let fixture: ComponentFixture<OptionsServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionsServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
