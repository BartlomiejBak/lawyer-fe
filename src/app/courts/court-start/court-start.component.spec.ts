import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtStartComponent } from './court-start.component';

describe('CourtStartComponent', () => {
  let component: CourtStartComponent;
  let fixture: ComponentFixture<CourtStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
