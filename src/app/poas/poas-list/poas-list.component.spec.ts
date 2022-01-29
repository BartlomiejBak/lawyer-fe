import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoasListComponent } from './poas-list.component';

describe('PoasListComponent', () => {
  let component: PoasListComponent;
  let fixture: ComponentFixture<PoasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoasListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
