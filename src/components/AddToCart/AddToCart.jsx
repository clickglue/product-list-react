import styles from "./AddToCart.module.css";

function AddToCart() {
  return (
    <main className={styles.addToCart}>
      <button className={styles.button1}>
        <img src="/src/assets/images/icon-add-to-cart.svg" alt="Add to cart" />
        <h1>Add to Cart</h1>
      </button>
      <button className={styles.button2}>
        <div className={styles.minusSign}>
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
        <h1>1</h1>
        <div className={styles.plusSign}>
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
