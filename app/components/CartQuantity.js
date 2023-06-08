'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '../../database/products';
import { getQuantities } from '../products/[productId]/actions';

export default async function CartQuantity() {
  const cartProducts = await getQuantities();
  cartProducts.map((cartProduct) => {
    products.find((quantity) => cartProduct.id === quantity.id);
    return { ...cartProduct };
  });

  const productsWithQuantity = cartProducts.map((cartProduct) => {
    const product = getProductById(cartProduct.id);
    if (product && cartProduct.quantity) {
      return {
        ...product,
        quantity: cartProduct.quantity,
      };
    }
  });

  const totalCartQuantity = productsWithQuantity.reduce(
    (total, product) => total + (product.quantity || 0),
    0,
  );

  return (
    <>
      {productsWithQuantity.map((cartProduct) => (
        <div key={`product-div-${cartProduct.id}`}>
          <span>
            Cart
            {totalCartQuantity}
          </span>
        </div>
      ))}
    </>
  );
}
