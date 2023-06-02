type Product = {
  id: number;
  name: string;
  image: string;
  alt: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'JavaScript Java',
    image: 'coffee',
    alt: 'bag of coffee',
    price: 12,
  },
  {
    id: 2,
    name: 'API : IPA',
    image: 'beer',
    alt: 'beer bottle',
    price: 6,
  },
  {
    id: 3,
    name: 'camelCaseCabernet',
    image: 'wine1',
    alt: 'wine bottle',
    price: 23,
  },
  {
    id: 4,
    name: 'Error 500',
    image: 'whiskey',
    alt: 'whiskey bottle',
    price: 48,
  },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
