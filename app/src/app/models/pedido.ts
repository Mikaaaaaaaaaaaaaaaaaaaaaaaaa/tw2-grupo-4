export interface ItemPedido {
  productId: number;
  quantity: number;
}

export interface NuevoPedido {
  userId: number;
  items: ItemPedido[];
  total: number;
  date: string;
}

export interface Pedido extends NuevoPedido {
  id: number;
}
