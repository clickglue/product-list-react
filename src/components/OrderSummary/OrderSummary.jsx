import styles from "./OrderSummary.module.css";

function OrderSummary({itemData}) {
  return (
    <main className={styles.orderSummary}>
      <img src={itemData.image.thumbnail} alt={itemData.name} />
      <h2 className={styles.name}>{itemData.name}</h2>
      <h2 className={styles.quantity}>{itemData.quantity}x</h2>
      <h2 className={styles.price}>@
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(itemData.price)}
      </h2>
      <h2 className={styles.itemTotal}>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(itemData.itemTotal)}
      </h2>
      <hr />
    </main>
  );
}
export default OrderSummary;
