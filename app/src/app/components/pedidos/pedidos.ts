import { Component, inject } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Nav } from '../../nav/nav';
import { PedidoService } from '../../services/pedido';
import { ProductoService } from '../../services/producto';

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
  public readonly anio = new Date().getFullYear();

  public nombreProducto(productId: number): string {
    return this.productoService.obtenerPorId(productId)?.nombre ?? `Producto #${productId}`;
  }
}
