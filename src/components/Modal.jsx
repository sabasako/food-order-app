export default function Modal({
  onClose,
  cartData,
  onCartDecrease,
  totalQuantity,
  onCheckout,
}) {
  let totalPrice = 0;

  cartData.forEach((el) => {
    totalPrice += el.price * el.quantity;
  });

  totalPrice = totalPrice.toFixed(2);

  return (
    <>
      <div className="modal-background"></div>
      <div className="modal-cart">
        <h1>Your Cart</h1>
        <ul className="modal-cart-ul">
          {cartData.map((item) => (
            <li key={item.id} className="cart-item cart-item-mine">
              <p>
                {item.name} - {item.quantity} x ${item.price}
              </p>
              <p className="cart-item-actions">
                <button onClick={() => onCartDecrease(item.id, "decrease")}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => onCartDecrease(item.id, "increase")}>
                  +
                </button>
              </p>
            </li>
          ))}
        </ul>
        <p className="cart-total">${totalPrice}</p>
        <div className="cart-buttons-container">
          <button className="close-button" onClick={onClose}>
            Close
          </button>
          {totalQuantity > 0 && (
            <button
              className="button cart-button"
              onClick={() => onCheckout(true)}
            >
              Go to Checkout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
