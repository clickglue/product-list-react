import styles from "/src/pages/Modal.module.css";
import OrderSummary from "/src/components/OrderSummary/OrderSummary";

function Modal() {
  return (
    <main className={styles.modal}>
      <img
        src="/src/assets/images/icon-order-confirmed.svg"
        alt="Order confirmed!"
      />
      <h1>Order Confirmed</h1>
      <h3>We hope you enjoy your food!</h3>
      <div className={styles.orderSummary}>
        <OrderSummary></OrderSummary>
        <OrderSummary></OrderSummary>
        <div>
          <div className={styles.total}>
            <h2>Order Total</h2>
            <p>$46.55</p>
          </div>
        </div>
      </div>
      <button>
        <h2>Start New Order</h2>
      </button>
    </main>
  );
}

export default Modal;
