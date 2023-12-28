import Input from "./Input";

export default function Checkout({ onCheckout, cartData }) {
  console.log(cartData);

  let totalPrice = 0;

  cartData.forEach((el) => {
    totalPrice += el.price * el.quantity;
  });

  totalPrice = totalPrice.toFixed(2);

  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="modal-background"></div>
      <form className="modal form" onSubmit={handleForm}>
        <h1>Checkout</h1>
        <p>Total amount: ${totalPrice}</p>
        <Input type="text" name="name" required>
          Full Name
        </Input>
        <Input type="email" name="email" required>
          E-Mail Address
        </Input>
        <Input type="text" name="street" required>
          Street
        </Input>
        <div className="control-row">
          <Input type="text" name="postal" required>
            Postal Code
          </Input>
          <Input type="text" name="city" required>
            City
          </Input>
        </div>
        <div className="cart-buttons-container">
          <button className="close-button">Close</button>
          <button className="button cart-button">Submit Order</button>
        </div>
      </form>
    </>
  );
}
