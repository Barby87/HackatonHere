import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HereRoutesComponent } from './here-routes.component';

describe('HereRoutesComponent', () => {
  let component: HereRoutesComponent;
  let fixture: ComponentFixture<HereRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HereRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HereRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
