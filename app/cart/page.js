import Image from 'next/image';
import Link from 'next/link';
import { getProductById, products } from '../../database/products';
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
    (total, product) => total + (product.price || 0),
    0,
  );

  return (
    <>
      {productsWithQuantity.map((cartProduct) => (
        <div key={`product-div-${cartProduct.id}`}>
          <h1>
Shopping Cart
          </h1>
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
            <p>Quantity: {cartProduct.quantity}</p>
        </div>
      ))}
      <p>
        Total Cart Quantity:
        {totalCartQuantity}
      </p>
      <p> Total Order Price: ${totalCartPrice}</p>
    </>
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
