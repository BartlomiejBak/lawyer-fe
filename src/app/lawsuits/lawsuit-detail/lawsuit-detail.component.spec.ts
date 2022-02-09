import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitDetailComponent } from './lawsuit-detail.component';

describe('LawsuitDetailComponent', () => {
  let component: LawsuitDetailComponent;
  let fixture: ComponentFixture<LawsuitDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsuitDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
