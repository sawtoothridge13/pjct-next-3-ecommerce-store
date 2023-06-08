import { Updock } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '../../database/products';
import CartQuantity from '../components/CartQuantity';
import RemoveFromCartComponent from '../components/RemoveFromCartComponent';
import UpDateQuantity from '../components/UpdateQuantity';
import { getQuantities } from '../products/[productId]/actions';

export default async function CartPage() {
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
        price: product.price,
        quantity: cartProduct.quantity,
      };
    }
  });

  // const productQuantity = productsWithQuantity.reduce(
  //   (total, product) => total + (product.quantity || 0),
  //   0,
  // );

  const totalCartQuantity = productsWithQuantity.reduce(
    (total, product) => total + (product.quantity || 0),
    0,
  );

  const totalCartPrice = productsWithQuantity.reduce(
    (total, product) => total + (product.price || 0) * (product.quantity || 0),
    0,
  );

  return (
    <main>
      {productsWithQuantity.map((cartProduct) => (
        <div key={`product-div-${cartProduct.id}`}>
          <h1>Shopping Cart</h1>
          <section data-test-id={`cart-product-${cartProduct.id}`}>
            <Image
              src={`/images/${cartProduct.image}.png`}
              alt={`/database/${cartProduct.alt}`}
              width={400}
              height={400}
            />
            <br />
            {cartProduct.name}
            <br />
            <p> Price ${cartProduct.price}</p>
            <p data-test-id={`cart-product-quantity-${cartProduct.id}`}>
              Quantity: {cartProduct.quantity}
            </p>
            <button>Remove Item</button>
          </section>
        </div>
      ))}
      <p>
        Total Cart Quantity:
        {totalCartQuantity}
      </p>
      <p> Total Order Price: ${totalCartPrice}</p>
      <button>Checkout</button>
    </main>
  );
}

// export default async function CartPage() {
//   const cartProducts = await getQuantities();
//   const quantities = cartProducts.map((product) => {
//     const productsWithQuantity = products.find(
//       (quantity) => quantity.id === product.id,
//     );

//     return { ...product, quantity: productsWithQuantity.quantity };
//   });
// }
