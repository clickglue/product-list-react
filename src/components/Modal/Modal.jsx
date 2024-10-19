import styles from "/src/components/Modal/Modal.module.css";
import OrderSummary from "/src/components/OrderSummary/OrderSummary";

function Modal({ cartData, onCloseModal }) {
  function calcultateTotal() {
    var total = 0;
    cartData.map((item) => {
      if (item.quantity != 0) {
        total = total + item.itemTotal;
      }
    });
    return total;
  }
  return (
    <div className={styles.backdrop}>
    <main className={styles.modal}>
      <img
        src="/src/assets/images/icon-order-confirmed.svg"
        alt="Order confirmed!"
      />
      <h1>Order Confirmed</h1>
      <h3>We hope you enjoy your food!</h3>
      <div className={styles.orderSummary}>
        {cartData.map((item) =>
          item.quantity != 0 ? (
            <OrderSummary itemData={item}></OrderSummary>
          ) : (
            ""
          )
        )}
        <div>
          <div className={styles.total}>
            <h2>Order Total</h2>
            <p>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(calcultateTotal())}
            </p>
          </div>
        </div>
      </div>
      <button onClick={onCloseModal}>
        <h2>Start New Order</h2>
      </button>
    </main>
    </div>
  );
}

export default Modal;
