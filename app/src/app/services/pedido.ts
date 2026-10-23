import { Injectable, signal } from '@angular/core';
import { NuevoPedido, Pedido } from '../models/pedido';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private readonly listaPedidos = signal<Pedido[]>([]);
  private ultimoId = 0;

  public readonly pedidos = this.listaPedidos.asReadonly();

  public crearPedido(nuevo: NuevoPedido): Pedido {
    const pedido: Pedido = { id: ++this.ultimoId, ...nuevo };

    this.listaPedidos.update((lista) => [pedido, ...lista]);
    return pedido;
  }
}
