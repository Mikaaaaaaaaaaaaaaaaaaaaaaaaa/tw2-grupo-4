import { Component } from '@angular/core';
import { Carrito } from '../carrito/carrito';
import { RouterLink } from '@angular/router';

@Component({
  imports: [Carrito, RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {
}
