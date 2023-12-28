import logo from "../assets/logo.jpg";
import Checkout from "./Checkout";
import Modal from "./Modal";

import { useState } from "react";

export default function Header({ cartData, onCartDecrease }) {
  const [showModal, setShowModal] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);

  let totalQuantity = 0;

  cartData.forEach((el) => {
    totalQuantity += el.quantity;
  });

  function handleClose() {
    setShowModal(false);
  }

  function handleCheckout(par) {
    setShowCheckout(par);
  }

  return (
    <>
      {showModal && !showCheckout && (
        <Modal
          onCheckout={handleCheckout}
          onCartDecrease={onCartDecrease}
          cartData={cartData}
          onClose={handleClose}
          totalQuantity={totalQuantity}
        />
      )}
      {showCheckout && (
        <Checkout cartData={cartData} onCheckout={handleCheckout} />
      )}
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="react food logo" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button" onClick={() => setShowModal(true)}>
          Cart ({totalQuantity})
        </button>
      </header>
    </>
  );
}
