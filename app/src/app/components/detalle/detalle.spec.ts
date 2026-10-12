import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Detalle } from './detalle';

describe('Detalle', () => {
  let component: Detalle;
  let fixture: ComponentFixture<Detalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Detalle],
    }).compileComponents();

    fixture = TestBed.createComponent(Detalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
