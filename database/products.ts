type Product = {
  id: number;
  name: string;
  image: string;
  price: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'JavaScript Java',
    image: 'coffee',
    price: '10',
  },
  { id: 2, name: 'API : IPA', image: 'beer', price: '10' },
  {
    id: 3,
    name: 'camelCaseCabernet',
    image: 'wine1',
    price: '10',
  },
  {
    id: 4,
    name: 'Error 500',
    image: 'whiskey',
    price: '10',
  },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
