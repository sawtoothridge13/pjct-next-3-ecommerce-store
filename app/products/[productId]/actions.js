'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCartQuantity(id, quantity) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const cartCookie = getCookie('cart');
  // 2. we parse the cookie
  const cart = !cartCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the singProductQuantity inside
      []
    : parseJson(cartCookie);

  // 3. we edit the object

  // We get the object for the product in cookies or undefined
  const quantityToUpdate = cart.find((item) => {
    return item.id === id;
  });

  // case B: the cookie is defined but have the product in the action
  // if we are in product 1
  // [{id:1, productCount:"abc"}]
  if (quantityToUpdate) {
    // we need to update the cartProduct
    quantityToUpdate.quantity += quantity;
  } else {
    // case C: the cookie is defined but doesn't have product in the action
    // if we are in product 1
    // [{id:2, productCount:"abc"}]
    cart.push({
      // we need insert the cartProduct
      id,
      quantity,
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('cart', JSON.stringify(cart));
}
