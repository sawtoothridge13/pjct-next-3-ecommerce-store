'use client';

import { useState } from 'react';

export default function QuantityButton(props) {
  const [singleProductQuantity, setSingleProductQuantity] = useState(1);

  return (
    <>
      {singleProductQuantity}
      <br />
      <button
        onClick={() =>
          setSingleProductQuantity(
            singleProductQuantity > 0
              ? singleProductQuantity - 1
              : singleProductQuantity,
          )
        }
      >
        -
      </button>
      <button
        onClick={() => setSingleProductQuantity(singleProductQuantity + 1)}
      >
        +
      </button>
    </>
  );
}
