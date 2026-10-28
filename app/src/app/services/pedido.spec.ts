import { PedidoService } from './pedido';
import { NuevoPedido } from '../models/pedido';

const base: NuevoPedido = {
  userId: 1,
  items: [{ productId: 2, quantity: 1, unitPrice: 119.5 }],
  total: 119.5,
  date: '2026-10-03',
};

describe('PedidoService', () => {
  beforeEach(() => localStorage.clear());
  afterEach(() => localStorage.clear());

  it('asigna ids incrementales y deja el más nuevo primero', () => {
    const service = new PedidoService();
    service.crearPedido(base);
    service.crearPedido(base);

    expect(service.pedidos().map((p) => p.id)).toEqual([2, 1]);
  });

  it('recupera los pedidos y el último id desde localStorage', () => {
    new PedidoService().crearPedido(base);

    const recargado = new PedidoService();
    expect(recargado.pedidos()).toHaveLength(1);
    expect(recargado.crearPedido(base).id).toBe(2);
  });
});
