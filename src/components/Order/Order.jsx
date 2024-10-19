import styles from "/src/components/Order/Order.module.css";

function Order({ itemData, onDataChange }) {

  function reset() {
    itemData.quantity=0
    onDataChange(itemData);
    console.log('reset')
  }

  return (
    <main className={styles.order}>
      <div className={styles.orderGrid}>
        <h1>{itemData.name}</h1>
        <h2 className={styles.orderAmount}>{itemData.quantity}x</h2>
        <h2 className={styles.itemPrice}>{itemData.price}</h2>
        <h2 className={styles.orderTotal}>
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(itemData.itemTotal)}
        </h2>
        <div className={styles.removeSign} onClick={reset}>
          <img
            className={styles.img1}
            src="/src/assets/images/icon-circle-grey.svg"
            alt="circle"
          />
          <img
            className={styles.img2}
            src="/src/assets/images/icon-remove-item.svg"
            alt="Plus"
          />
        </div>
        <hr />
      </div>
    </main>
  );
}

export default Order;
