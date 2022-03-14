import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitItemComponent } from './lawsuit-item.component';

describe('LawsuitItemComponent', () => {
  let component: LawsuitItemComponent;
  let fixture: ComponentFixture<LawsuitItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsuitItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
