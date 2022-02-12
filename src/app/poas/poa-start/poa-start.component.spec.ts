import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaStartComponent } from './poa-start.component';

describe('PoaStartComponent', () => {
  let component: PoaStartComponent;
  let fixture: ComponentFixture<PoaStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoaStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
