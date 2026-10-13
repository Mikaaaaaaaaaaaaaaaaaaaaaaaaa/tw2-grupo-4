import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-carrito',
  styleUrl: './carrito.css',
  templateUrl: './carrito.html',
})
export class Carrito {
    carritoAbierto: boolean = false;

  abrirCarrito(): void {
    this.carritoAbierto = true;
  }

  cerrarCarrito(): void {
    this.carritoAbierto = false;
  }
}