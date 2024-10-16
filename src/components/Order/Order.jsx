import styles from "/src/components/Order/Order.module.css";

const data = {
  image: {
    thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
    mobile: "./assets/images/image-tiramisu-mobile.jpg",
    tablet: "./assets/images/image-tiramisu-tablet.jpg",
    desktop: "./assets/images/image-tiramisu-desktop.jpg",
  },
  name: "Classic Tiramisu",
  category: "Tiramisu",
  price: 5.5,
};

function Order() {
  return (
    <main className={styles.order}>
      <div className={styles.orderGrid}>
        <h1>{data.name}</h1>
        <h2 className={styles.orderAmount}>1x</h2>
        <h2 className={styles.itemPrice}>{data.price}</h2>
        <h2 className={styles.orderTotal}>$28,00</h2>
        <div className={styles.removeSign}>
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
