import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaEditComponent } from './poa-edit.component';

describe('PoaEditComponent', () => {
  let component: PoaEditComponent;
  let fixture: ComponentFixture<PoaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
