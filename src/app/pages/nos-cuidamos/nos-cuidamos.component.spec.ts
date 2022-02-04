import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosCuidamosComponent } from './nos-cuidamos.component';

describe('NosCuidamosComponent', () => {
  let component: NosCuidamosComponent;
  let fixture: ComponentFixture<NosCuidamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosCuidamosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosCuidamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
