import { Sql } from 'postgres';

export const products = [
  {
    id: 1,
    name: 'JavaScript Java',
    alt: 'coffee',
    description:
      'Our signature coffee blend, "JavaScript Java," is a rich and robust coffee sourced from tech-savvy regions. With every sip, you will experience the perfect balance of caffeine and flavor, providing the energy and focus you need for those long coding sessions.',
    price: 16,
  },
  {
    id: 2,
    name: 'API : IPA',
    alt: 'beer',
    description:
      'For those who prefer a little hop in their step, we present "API : IPA." This India Pale Ale is as crisp and refreshing as a perfectly written API call. It iss a delightful choice to unwind and celebrate your coding triumphs.',
    price: 12,
  },
  {
    id: 3,
    name: 'camelCaseCabernet',
    alt: 'wine',
    description:
      'A premium cabernet wine, named after the coding convention you know and love. With its deep, complex flavors and smooth finish, it is the ideal way to relax and unwind after a successful (or unsuccessful) day of coding.',
    price: 45,
  },
  {
    id: 4,
    name: 'Error 500 Whiskey',
    alt: 'whiskey',
    description: `For those late nights when you find yourself staring at your screen, scratching your head, and desperately searching for that elusive bug, "Error 500 Whiskey" is your reliable companion when you have have no idea what happened, but you know it was your fault`,
    price: 60,
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
    INSERT INTO products
      (name, alt, description, price)
    VALUES
      (${product.name}, ${product.alt}, ${product.description}, ${product.price})
  `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products WHERE id=${product.id}
    `;
  }
}
