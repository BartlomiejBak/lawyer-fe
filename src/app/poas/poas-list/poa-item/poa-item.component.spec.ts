import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoaItemComponent } from './poa-item.component';

describe('PoaItemComponent', () => {
  let component: PoaItemComponent;
  let fixture: ComponentFixture<PoaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoaItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
