import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostactiveComponent } from './mostactive.component';

describe('MostactiveComponent', () => {
  let component: MostactiveComponent;
  let fixture: ComponentFixture<MostactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
