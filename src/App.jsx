import Header from "./components/Header";
import Meals from "./components/Meals";
import { useState } from "react";

function App() {
  const [cartData, setCartData] = useState([]);

  function handleCartData(data) {
    setCartData((prevData) => {
      const cartItem = prevData.find((item) => item.id === data.id);
      if (cartItem) {
        return prevData.map((item) => {
          if (item.id == cartItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      }

      return [
        ...prevData,
        {
          id: data.id,
          name: data.name,
          price: data.price,
          quantity: 1,
        },
      ];
    });
  }

  function handleCartDecrease(id, operation) {
    const item = cartData.find((item) => item.id === id);
    if (item.quantity === 1 && operation === "decrease") {
      setCartData((prevData) => {
        return prevData.filter((item) => item.id !== id);
      });
    } else {
      setCartData((prevData) => {
        return prevData.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity:
                operation === "decrease"
                  ? item.quantity - 1
                  : item.quantity + 1,
            };
          } else {
            return item;
          }
        });
      });
    }
  }

  return (
    <>
      <Header onCartDecrease={handleCartDecrease} cartData={cartData} />
      <Meals onCartData={handleCartData} />
    </>
  );
}

export default App;
