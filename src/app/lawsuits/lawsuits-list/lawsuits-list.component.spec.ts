import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitsListComponent } from './lawsuits-list.component';

describe('LawsuitsListComponent', () => {
  let component: LawsuitsListComponent;
  let fixture: ComponentFixture<LawsuitsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawsuitsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
