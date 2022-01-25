import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitEditComponent } from './lawsuit-edit.component';

describe('LawsuitEditComponent', () => {
  let component: LawsuitEditComponent;
  let fixture: ComponentFixture<LawsuitEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsuitEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
