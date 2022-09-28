import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    totalShipping += product.shipping;
  }
  const totalTax = total * 0.1;
  const grandTotal = total + totalShipping + totalTax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${totalTax.toFixed(2)}</p>
      <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
