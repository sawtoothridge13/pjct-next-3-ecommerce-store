export const products = [
  {
    id: 1,
    name: 'JavaScript Java',
    image: 'coffee',
    alt: 'bag of coffee',
    price: '10',
  },
  { id: 2, name: 'API : IPA', image: 'beer', alt: 'beer bottle', price: '10' },
  {
    id: 3,
    name: 'camelCaseCabernet',
    image: 'wine1',
    alt: 'wine bottle',
    price: '10',
  },
  {
    id: 4,
    name: 'Error 500',
    image: 'whiskey',
    alt: 'whiskey bottle',
    price: '10',
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
