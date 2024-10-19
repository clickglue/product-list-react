import { useState, useEffect } from "react";
import styles from "./AddToCart.module.css";
import PropTypes from "prop-types";

function AddToCart({ itemData, onDataChange }) {
  AddToCart.propTypes = {
    itemData: PropTypes.object.isRequired,
    onDataChange: PropTypes.func.isRequired,
  };
  const [quantity, setQuantity] = useState(itemData.quantity);

  function handleMinus() {
    if (quantity == 1) {
      setQuantity(0);
      itemData.quantity=0
      itemData.itemTotal=0
      onDataChange(itemData);
    } else {
      setQuantity(quantity - 1);
      itemData.quantity=quantity-1
      itemData.itemTotal=(quantity-1)*itemData.price
      onDataChange(itemData);
    }
  }
  function handlePlus() {
    setQuantity(quantity + 1);
    itemData.quantity=quantity+1
    itemData.itemTotal=(quantity+1)*itemData.price
    onDataChange(itemData);
  }

  return (
    <main className={styles.addToCart}>
      <button
        className={styles.button1}
        style={{ display: quantity == 0 ? "flex" : "none" }}
        onClick={handlePlus}
      >
        <img src="/src/assets/images/icon-add-to-cart.svg" alt="Add to cart" />
        <h1>Add to Cart</h1>
      </button>
      <button
        className={styles.button2}
        style={{ display: quantity == 0 ? "none" : "flex" }}
      >
        <div className={styles.minusSign} onClick={handleMinus}>
          <img
            className={styles.img1}
            src="/src/assets/images/icon-circle.svg"
            alt="circle"
          />
          <img
            className={styles.img2}
            src="/src/assets/images/icon-decrement-quantity.svg"
            alt="Minus"
          />
        </div>
        <h1>{quantity}</h1>
        <div className={styles.plusSign} onClick={handlePlus}>
          <img
            className={styles.img1}
            src="/src/assets/images/icon-circle.svg"
            alt="circle"
          />
          <img
            className={styles.img2}
            src="/src/assets/images/icon-increment-quantity.svg"
            alt="Plus"
          />
        </div>
      </button>
    </main>
  );
}

export default AddToCart;
