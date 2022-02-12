import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitStartComponent } from './lawsuit-start.component';

describe('LawsuitStartComponent', () => {
  let component: LawsuitStartComponent;
  let fixture: ComponentFixture<LawsuitStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsuitStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
