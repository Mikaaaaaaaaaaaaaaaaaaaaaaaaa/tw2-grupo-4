import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto';
import { Product } from '../../models/product';


@Component({
  imports: [RouterLink],
  selector: 'app-detalle',
  styleUrl: './detalle.css',
  templateUrl: './detalle.html',
})
export class Detalle {
  private route = inject(ActivatedRoute);
  private productoService = inject(ProductoService);

  producto?: Product;

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productoService.obtenerPorId(id);
  }
}
