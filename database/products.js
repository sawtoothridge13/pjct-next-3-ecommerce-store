export const products = [
  { id: 1, name: 'JavaScript Java', type: 'coffee', price: '10' },
  { id: 2, name: 'API IPA', type: 'beer', price: '10' },
  { id: 3, name: 'cameCaseCabernet', type: 'wine', price: '10' },
  { id: 4, name: 'Error 500', type: 'whiskey', price: '10' },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
