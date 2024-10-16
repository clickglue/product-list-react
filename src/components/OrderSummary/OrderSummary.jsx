import styles from "/src/components/OrderSummary/OrderSummary.module.css";

const itemData = {
  image: {
    thumbnail: "/src/assets/images/image-waffle-thumbnail.jpg",
    mobile: "/src/assets/images/image-waffle-mobile.jpg",
    tablet: "/src/assets/images/image-waffle-tablet.jpg",
    desktop: "/src/assets/images/image-waffle-desktop.jpg",
  },
  name: "Waffle with Berries",
  category: "Waffle",
  price: 6.5,
  itemTotal: 28.0,
  quantity: 2,
};

function OrderSummary() {
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
