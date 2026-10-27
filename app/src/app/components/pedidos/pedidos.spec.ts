import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Pedidos } from './pedidos';
import { PedidoService } from '../../services/pedido';

describe('Pedidos', () => {
  let fixture: ComponentFixture<Pedidos>;
  let pedidoService: PedidoService;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [Pedidos],
      providers: [provideRouter([])],
    }).compileComponents();

    pedidoService = TestBed.inject(PedidoService);
    fixture = TestBed.createComponent(Pedidos);
  });

  afterEach(() => localStorage.clear());

  it('should create', async () => {
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('muestra el estado vacío cuando no hay pedidos', async () => {
    await fixture.whenStable();
    const html = fixture.nativeElement as HTMLElement;

    expect(html.querySelector('#sin_pedidos_div')?.textContent).toContain(
      'No has realizado compras aún',
    );
    expect(html.querySelector('#lista_pedidos_ul')).toBeNull();
  });

  it('lista los pedidos cuando ya hay compras', async () => {
    pedidoService.crearPedido({
      userId: 12,
      items: [{ productId: 1, quantity: 2, unitPrice: 1399.99 }],
      total: 2799.98,
      date: '2026-10-03',
    });
    await fixture.whenStable();
    const html = fixture.nativeElement as HTMLElement;
    const lista = html.querySelector('#lista_pedidos_ul')?.textContent;

    expect(html.querySelector('#sin_pedidos_div')).toBeNull();
    expect(lista).toContain('Pedido #1');
    expect(lista).toContain('03/10/2026');
    expect(lista).toContain('MacBook Air M2 Pro 15"');
    expect(lista).toContain('2,799.98');
  });
});
