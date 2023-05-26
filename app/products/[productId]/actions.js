'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export async function createOrUpdateCartProducts(productId, productCount) {
  // 1. get the current cookie
  // This get the cookies from the Request Headers
  const cartProductsCookie = getCookie('AllCartProducts');
  // 2. we parse the cookie
  const allCartProducts = !cartProductsCookie
    ? // case A: cookie is undefined
      // undefined
      // we need to create the new array with the fruitComment inside
      []
    : parseJson(cartProductsCookie);

  // 3. we edit the object

  // We get the object for the product in cookies or undefined
  const productToUpdate = allCartProducts.find((cartProduct) => {
    return cartProduct.id === productId;
  });

  // case B: the cookie is defined but have the product in the action
  // if we are in product 1
  // [{id:1, productCount:"abc"}]
  if (productToUpdate) {
    // we need to update the cartProduct
    productToUpdate.productCount = productCount;
  } else {
    // case C: the cookie is defined but doesn't have product in the action
    // if we are in product 1
    // [{id:2, productCount:"abc"}]
    allCartProducts.push({
      // we need insert the cartProduct
      id: productId,
      productCount,
    });
  }

  // 4. we override the cookie
  // This set the cookies into the Response Headers
  await cookies().set('fruitComments', JSON.stringify(allCartProducts));
}
