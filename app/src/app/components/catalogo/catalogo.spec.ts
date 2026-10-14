import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Catalogo } from './catalogo';

describe('Catalogo', () => {
  let component: Catalogo;
  let fixture: ComponentFixture<Catalogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Catalogo],
    }).compileComponents();

    fixture = TestBed.createComponent(Catalogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar todos los productos al iniciar con el filtro Todas', () => {
    component.ngOnInit();

    expect(component.categoriaActiva).toBe('Todos');
    expect(component.productosFiltrados).toEqual(component.productos);
    expect(component.productosFiltrados.length).toBeGreaterThan(0);
  });
});
