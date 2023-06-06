import Link from 'next/link';
import { products } from '../../database/products';
import { getQuantities } from '../products/[productId]/actions';

export default async function CartPage() {
  const cartProducts = await getQuantities();
  const cartProductsWithQuantities = cartProducts.map((product) => {
    products.find((quantity) => quantity.id === product.id);

    return { ...product };
  });

  console.log(cartProductsWithQuantities);

  // return (
  //   <>
  //     {cartProductsWithQuantities.map((product) => (
  //       <div key={`product-div-${product.id}`}>
  //         <Link href={`/products/${product.id}`}>
  //           <h1>
  //             {product.name} {product.quantity}
  //           </h1>
  //         </Link>
  //         {}
  //       </div>
  //     ))}
  //   </>
  // );
}

// export default async function CartPage() {
//   const cartProducts = await getQuantities();
//   const quantities = cartProducts.map((product) => {
//     const productsWithQuantity = products.find(
//       (quantity) => quantity.id === product.id,
//     );

//     return { ...product, quantity: productsWithQuantity.quantity };
//   });
//   console.log(quantities);
