'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateCartQuantity } from '../products/[productId]/actions';

export default function AddToCartComponent(props) {
  const [productQuantity, setProductQuantity] = useState(1);
  const router = useRouter();

  return (
    <div>
      {productQuantity}
      <br />

      <button
        onClick={() =>
          setProductQuantity(
            productQuantity > 0 ? productQuantity - 1 : productQuantity,
          )
        }
      >
        -
      </button>
      <button onClick={() => setProductQuantity(productQuantity + 1)}>+</button>

      <form>
        <button
          formAction={async () => {
            router.refresh();
            await createOrUpdateCartQuantity(props.productId, productQuantity);
            setProductQuantity(1);
          }}
        >
          Add To Cart
        </button>
      </form>
    </div>
  );
}
