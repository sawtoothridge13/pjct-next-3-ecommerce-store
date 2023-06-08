'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createOrUpdateCartQuantity } from '../products/[productId]/actions';

export default function UpDateQuantity(props) {
  const [productQuantity, setProductQuantity] = useState(1);
  const router = useRouter();

  return (
    <div>
      {productQuantity}
      <br />

      <form>
        <button
          formAction={async () => {
            router.refresh();
            await createOrUpdateCartQuantity(props.productId, productQuantity);
            setProductQuantity(1);

            setProductQuantity(
              productQuantity > 0 ? productQuantity - 1 : productQuantity,
            );
          }}
        >
          -
        </button>
      </form>
      <form>
        <button
          formAction={async () => {
            router.refresh();
            await createOrUpdateCartQuantity(props.productId, productQuantity);
            setProductQuantity(1);

            setProductQuantity(
              productQuantity > 0 ? productQuantity + 1 : productQuantity,
            );
          }}
        >
          +
        </button>
      </form>
    </div>
  );
}
