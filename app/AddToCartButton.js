'use client';

import { useState } from 'react';
import quantity from './QuantityButton';

export default function AddToCartButton() {
  const [cartQuantity, setCartQuantity] = useState(0);
  return (
    <button onClick={() => setCartQuantity({ quantity } + cartQuantity)}>
      Add to cart
    </button>
  );
}
