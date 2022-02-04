import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TragosComponent } from './tragos.component';

describe('TragosComponent', () => {
  let component: TragosComponent;
  let fixture: ComponentFixture<TragosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TragosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TragosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
