'use client';

import { useState } from 'react';

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {quantity}
      <br />
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
      <button
        onClick={() => setQuantity(quantity > 0 ? quantity - 1 : quantity)}
      >
        -
      </button>
    </>
  );
}
