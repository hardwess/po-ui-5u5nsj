import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OridestComponent } from './oridest.component';

describe('OridestComponent', () => {
  let component: OridestComponent;
  let fixture: ComponentFixture<OridestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OridestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OridestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
