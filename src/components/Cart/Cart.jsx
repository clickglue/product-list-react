import styles from "/src/components/Cart/Cart.module.css";
import Order from "/src/components/Order/Order";

function Cart({ cartData, onDataChange, onConfirm }) {
  function calcultateTotal() {
    var total = 0;
    cartData.map((item) => {
      if (item.quantity != 0) {
        total = total + item.itemTotal;
      }
    });
    return total;
  }
  function calcultateItems() {
    var total = 0;
    cartData.map((item) => {
      if (item.quantity != 0) {
        total = total + 1;
      }
    });
    return total;
  }

  
  return (
    <article className={styles.cart}>
      <header>
        <h1>Your Cart({calcultateItems()})</h1>
      </header>
      <main>
        <div className={styles.orderContainer}>
        {cartData.map((item) =>
          item.quantity != 0 ? (
            <Order itemData={item} onDataChange={onDataChange}></Order>
          ) : (
            ""
          )
        )}
        </div>

        <div className={styles.total}>
          <h2>Order Total</h2>
          <p>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(calcultateTotal())}
          </p>
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
        <button onClick={onConfirm}>
          <h2>Confirm Order</h2>
        </button>
      </main>
    </article>
  );
}

export default Cart;
