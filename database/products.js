export const products = [
  { id: 1, name: 'JavaScript Java', type: 'coffee' },
  { id: 2, name: 'API IPA', type: 'beer' },
  { id: 3, name: 'cameCaseCabernet', type: 'wine' },
  { id: 4, name: 'Error 500', type: 'whiskey' },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
