import { Component, inject } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PedidoService } from '../../services/pedido';
import { ProductoService } from '../../services/producto';
import { Nav } from '../../nav/nav';

@Component({
  imports: [RouterLink, DatePipe, DecimalPipe, Nav],
  selector: 'app-pedidos',
  templateUrl: './pedidos.html',
  host: { class: 'block' },
})
export class Pedidos {
  private readonly pedidoService = inject(PedidoService);
  private readonly productoService = inject(ProductoService);

  public readonly pedidos = this.pedidoService.pedidos;

  // Se arma una sola vez en vez de buscar el producto en cada render.
  private readonly nombres = new Map(
    this.productoService.obtenerTodosProductos().map((p) => [p.id, p.nombre] as const),
  );

  public nombreProducto(productId: number): string {
    return this.nombres.get(productId) ?? `Producto #${productId}`;
  }
}
