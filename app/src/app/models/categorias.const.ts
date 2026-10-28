export const CATEGORIAS = [
  'Laptops',
  'Periféricos',
  'Audio',
  'Componentes',
] as const;

export type Categoria = (typeof CATEGORIAS)[number];
