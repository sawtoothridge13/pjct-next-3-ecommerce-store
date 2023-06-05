import { products } from '../../database/products';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import { getQuantities } from '../products/[productId]/actions';

export default async function CartPage() {
  const quantities = await getQuantities();

  const cartProduct = quantities.map((product) => {
    return products.filter((quantity) => quantity.id === product.id);
  });
  console.log('cartProduct', cartProduct);
  return <div>Hello</div>;
}
