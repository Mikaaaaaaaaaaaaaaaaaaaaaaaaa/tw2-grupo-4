import { Injectable, signal } from '@angular/core';
import { NuevoPedido, Pedido } from '../models/pedido';

const CLAVE_STORAGE = 'techstore.pedidos';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  private readonly listaPedidos = signal<Pedido[]>(this.cargar());
  private ultimoId = this.listaPedidos().reduce((max, p) => Math.max(max, p.id), 0);

  public readonly pedidos = this.listaPedidos.asReadonly();

  public crearPedido(nuevo: NuevoPedido): Pedido {
    const pedido: Pedido = { id: ++this.ultimoId, ...nuevo };

    this.listaPedidos.update((lista) => [pedido, ...lista]);
    this.guardar();
    return pedido;
  }

  private cargar(): Pedido[] {
    try {
      const guardado = localStorage.getItem(CLAVE_STORAGE);
      return guardado ? (JSON.parse(guardado) as Pedido[]) : [];
    } catch {
      return [];
    }
  }

  private guardar(): void {
    try {
      localStorage.setItem(CLAVE_STORAGE, JSON.stringify(this.listaPedidos()));
    } catch {
      // Sin storage disponible: seguimos solo en memoria.
    }
  }
}
