import styles from "/src/components/Cart/Cart.module.css";
import Order from "/src/components/Order/Order";

function Cart() {
  return (
    <article className={styles.cart}>
      <header>
        <h1>Your Cart(7)</h1>
      </header>
      <main>
        <div className={styles.orderContainer}>
          <Order></Order>
          <Order></Order>
          <Order></Order>
        </div>

        <div className={styles.total}>
          <h2>Order Total</h2>
          <p>$46.55</p>
        </div>
        <div className={styles.carbon}>
          <img
            src="/src/assets/images/icon-carbon-neutral.svg"
            alt="Carbon Neutral"
          />
          <p>
            This is a <strong>carbon-neutral</strong> delivery
          </p>
        </div>
        <button>
          <h2>Confirm Order</h2>
        </button>
      </main>
    </article>
  );
}

export default Cart;
