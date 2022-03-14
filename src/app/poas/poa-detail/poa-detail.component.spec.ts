import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaDetailComponent } from './poa-detail.component';

describe('PoaDetailComponent', () => {
  let component: PoaDetailComponent;
  let fixture: ComponentFixture<PoaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoaDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
