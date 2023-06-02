type Product = {
  id: number;
  name: string;
  slug: string;
  image: string;
  alt: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'JavaScript Java',
    slug: 'javascriptjava',
    image: 'coffee',
    alt: 'bag of coffee',
    price: 10,
  },
  {
    id: 2,
    name: 'API : IPA',
    slug: 'apiipa',
    image: 'beer',
    alt: 'beer bottle',
    price: 10,
  },
  {
    id: 3,
    name: 'camelCaseCabernet',
    slug: 'camelcasecabernet',
    image: 'wine1',
    alt: 'wine bottle',
    price: 10,
  },
  {
    id: 4,
    name: 'Error 500',
    slug: 'error500',
    image: 'whiskey',
    alt: 'whiskey bottle',
    price: 10,
  },
];

export function getProductById(id: number) {
  return products.find((product) => product.id === id);
}
