import styles from "/src/components/Cart/Cart.module.css";
import Order from "/src/components/Order/Order";
import { useState } from "react";

function Cart({ cartData, onDataChange, onConfirm }) {
  var visible=false

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
    if(total==0){visible=false} else {visible=true}
    return total;
  }
 
  return (
    <article className={styles.cart}>
      <header>
        <h1>Your Cart({calcultateItems()})</h1>
      </header>
      <main style={{ display: visible ? 'block' : 'none' }}>
        <div className={styles.orderContainer}>
          {cartData.map((item) =>
            item.quantity != 0 ? (
              <Order key={item.name} itemData={item} onDataChange={onDataChange}></Order>
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
      <div className={styles.emptyContainer} style={{ display: visible ? 'none' : 'block' }}>
          <img src="/src/assets/images/illustration-empty-cart.svg" alt="Empty cart!" />
          <h2>Your added items will appear here!</h2>
        </div>
    </article>
  );
}

export default Cart;
