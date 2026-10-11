import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductoService } from '../../services/producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  imports: [FormsModule, CommonModule, RouterModule],
  selector: 'app-catalogo',
  styleUrl: './catalogo.css',
  templateUrl: './catalogo.html',
})
export class Catalogo {
  public productos: Product[] = [];
  public productosFiltrados: Product[] = [];

  public categorias: string[] = ['Todos', 'Laptops', 'Perifericos', 'Audio'];
  public categoriaActiva: string = 'Todos';
  public busqueda: string = '';
  public orden: string = 'Destacados';

  public mensajeToast: string | null = null;

  public constructor(private productoService: ProductoService) {
  }

  public ngOnInit(): void {
    this.productos = this.productoService.obtenerTodosProductos();
  }

  public aplicarFiltrosBusquedas(): void {
    let resultado = [...this.productos];

    // Filtro por categoria.
    if (this.categoriaActiva !== 'Todos') {
      resultado = resultado.filter(p => p.categoria.toLowerCase() === this.categoriaActiva.toLowerCase());
    }

    // Filtro por texto de busqueada.
    if (this.busqueda.trim() !== '') {
      const textoBuscado = this.busqueda.toLowerCase();

      resultado = resultado.filter(p => p.nombre.toLowerCase().includes(textoBuscado) || p.descripcion.toLowerCase().includes(textoBuscado));
    }

    // Ordenamiento de resultados.
    if (this.orden === 'precio-menor') {
      resultado = resultado.sort((a, b) => a.precio - b.precio);
    } else if (this.orden === 'precio-mayor') {
      resultado = resultado.sort((a, b) => b.precio - a.precio);
    } else if (this.orden === 'rating') {
      resultado = resultado.sort((a, b) => b.rating - a.rating);
    }

    this.productosFiltrados = resultado;
  }

  public filtrarPorCategoria(categoria: string): void {
    this.categoriaActiva = categoria;
    this.aplicarFiltrosBusquedas();
  }

  public mostrarToast(mensaje: string): void {
    this.mensajeToast = mensaje;

    setTimeout(() => {
      this.mensajeToast = null;
    }, 3000);
  }

  public agregarAlCarritoDeCompras(producto: Product): void {
    this.mostrarToast(`Se ha agregado "${producto.nombre}" al carrito de compras.`);
  }
}